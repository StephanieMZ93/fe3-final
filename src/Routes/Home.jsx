import React from "react";

import Card from "../Components/card/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        <Card name="Stephanie" username="Stefy" id={123}/>
      </div>
    </main>
  );
};

export default Home;
