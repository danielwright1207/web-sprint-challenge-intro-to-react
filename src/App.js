import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const URLPeople = "https://swapi.dev/api/people/";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${URLPeople}`)
        .then((response) => {
          setCharacter(response.data.results[1].name);
          console.log(response);
          console.log("character", character);
        })
        .catch((error) => {
          console.log("you got an error", error);
        });
    };
    fetchData();
  }, []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  function createNamePlate(obj) {
    const namePlate = document.createElement("div");
    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = obj.name;
    namePlate.appendChild(name);

    return namePlate;
  }
  // const container = document.querySelector(".name");
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h2>{character}</h2>
    </div>
  );
};

export default App;

// setCharacter(response.data.results.name);
// console.log("can you see me?", response.data);
// response.data.forEach((item) => {
//   const newCharacter = createNamePlate(item);
//   character.push(item);

// useEffect(() => {
//   const fetchData = () => {
//     axios
//       .get(`${URLPeople}`)
//       .then((response) => {
//         setCharacter(response.data.results.name);
//         console.log("can you see me?", response.data);
//         response.data.forEach((item) => {
//           const newCharacter = createNamePlate(item);
//           character.push(item);
//           console.log(response);
//         });
//       })
//       .catch((error) => {
//         console.log("you got an error", error);
//       });
//   };
//   fetchData();
// }, []);
