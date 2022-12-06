import React from "react";
import logo from "../assets/images/doctor.jpg"
import Link from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card grid grid-cols-4 gap-4 mx-auto px-4 ">
      <image src={logo}></image>
      <p className="nameDentist">{name}</p>
      <p className="userNameDentist">{username}</p>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          <i className="fa-sharp fa-solid fa-star"></i>
        </button>
    </div>
  );

};

export default Card;
