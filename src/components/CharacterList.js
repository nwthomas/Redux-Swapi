import React from "react";
import "./Character.css";

import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="character__list">
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </div>
  );
};

export default CharacterList;
