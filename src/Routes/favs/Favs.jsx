import React, { useEffect, useState, useContext } from "react";

import ThemeContext from "../../context/ThemeContext";
import Card from "../../Components/card/Card";
import { DARK } from "../../common/const";
import "./favs.css";

const Favs = () => {
  const { theme } = useContext(ThemeContext);
  const [favs, setFavs] = useState();

  useEffect(() => {
    const favItems = localStorage.getItem("favs");
    const list = favItems ? JSON.parse(favItems) : [];
    setFavs(list);
  }, []);

  const removeFav = (id) => {
    const favList = localStorage.getItem("favs");
    const list = favList ? JSON.parse(favList) : [];
    const newList = list.filter((fav) => fav.id !== id);
    setFavs(newList);
    localStorage.setItem("favs", JSON.stringify(newList));
  };

  function renderFavs() {
    if (!favs) {
      return <div>Loading</div>;
    } else if (favs.length === 0) {
      return <div>You don't have favs</div>;
    } else {
      return favs.map((fav, i) => {
        return (
          <Card
            name={fav.name}
            username={fav.username}
            id={fav.id}
            option={{ type: "delete", callback: () => removeFav(fav.id) }}
            key={i}
          />
        );
      });
    }
  }

  return (
    <main className={theme === DARK ? "dark" : "light"}>
      <h1>Dentists Favs</h1>
      <div className="favContainer">{renderFavs()}</div>
    </main>
  );
};

export default Favs;