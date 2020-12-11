// Write your Character component here
import React from "react";
import Card from "./cards.js";

export default function CharacterList(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((character) => {
        return <Card key={character.id} character={character} />;
      })}
    </div>
  );
}
