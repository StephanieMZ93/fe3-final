import React, { useState, useEffect } from "react";

import Card from "../Components/card/Card";
import { getDentists } from "../service/api.js";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState();
  const [error, setError] = useState(false);

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
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {error ? <div>There was an error</div> : renderDentists()}
      </div>
    </main>
  );
};

export default Home;
