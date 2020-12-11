import React from "react";
import Character from "./Character.js";
import styled from "styled-components";

const Cardstyle = styled.div`
  padding: 2%;
  /* margin: 2%; */
`;

const CardBodyStyle = styled.div`
  padding: 1%;
  border: 1px solid blue;
  width: 10%;
  justify-content: center;
  align-items: center;
  margin-left: 44%;
  background-color: white;
  border-radius: 10%;
  margin-top: 1%;
`;

export default function Card(props) {
  const { character } = props;
  return (
    <div>
      <Cardstyle>
        <img src={character.image} alt={character.name} />
        <CardBodyStyle>
          <h2>Name: {character.name}</h2>
          <p>Gender: {character.gender}</p>
          <p> Origin: {character.origin.name} </p>
          <p> Species: {character.species} </p>
        </CardBodyStyle>
      </Cardstyle>
    </div>
  );
}
