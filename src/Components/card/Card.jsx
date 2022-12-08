import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/doctor.jpg";
import "./card.css";

const Card = ({ name, username, id, option }) => {
  const navegate = useNavigate();

  const navegateToDetail = () => {
    navegate(`./detail/${id}`);
  };

  function renderIconButton(type) {
    if (type === "delete") {
      return <i class="fa-solid fa-trash"></i>;
    } else if (type === "add") {
      return <i className="fa-sharp fa-solid fa-star"></i>;
    }
  }

  return (
    <div className="card grid grid-cols-4 mx-auto px-4 ">
      <img className="imageCard" src={logo} alt="doctor" />
      <p className="nameDentist" onClick={navegateToDetail}>
        {name}
      </p>
      <p className="userNameDentist">{username}</p>
      <button onClick={() => option.callback()} className="favButton">
        {renderIconButton(option.type)}
      </button>
    </div>
  );
};

export default Card;