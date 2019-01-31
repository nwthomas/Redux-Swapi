import React from "react";
import "./Character.css";

const Character = props => {
  return (
    <div className="character">
      <h2>{props.character.name}</h2>
      <p>{props.character.height}</p>
      <p>{props.character.birth_year}</p>
      <p>{props.character.gender}</p>
    </div>
  );
};

export default Character;
