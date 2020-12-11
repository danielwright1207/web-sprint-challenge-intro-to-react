import "./App.css";
import React, { useState, useEffect } from "react";
import Character from "./components/Character.js";
import axios from "axios";
import CharacterCard from "./components/cards.js";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 2%;
  margin: 2%;
  border: 1px solid red;
`;

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
        console.log(response);
      })
      .catch((error) => {
        console.log("you got an error dan", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledCard>
        <Character characters={characters} />
      </StyledCard>
    </div>
  );
}
export default App;
