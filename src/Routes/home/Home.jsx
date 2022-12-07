import React, { useState, useEffect, useContext } from "react";

import Card from "../../Components/card/Card";
import ThemeContext from "../../context/ThemeContext";
import DataContext from "../../context/DataContext";
import { getDentists } from "../../service/api.js";
import { DARK } from "../../common/const";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [error, setError] = useState(false);
  const {theme} = useContext(ThemeContext);
  const {dentists, setDentists} = useContext(DataContext);

  useEffect(() => {
    getDentists().then((response) => {
      if(response.data){
        setDentists(response.data);
        setError(false);
      } else{
        setError(true);
      }
    });
  }, []);

  function renderDentists() {
    if(!dentists){
      return <div>Loading</div>;
    } else if(dentists.length === 0){
      return <div>You don't have dentists</div>;
    } else{
      return dentists.map((fav, i) => {
        return <Card name={fav.name} username={fav.username} id={fav.id} key={i}/>
      })
    }
  }

  return (
    <main className={theme === DARK ? 'dark' : 'light'}>
      <h1>Home</h1>
      <div className="card-grid">
        {error ? <div>There was an error</div> : renderDentists()}
      </div>
    </main>
  );
};

export default Home;
