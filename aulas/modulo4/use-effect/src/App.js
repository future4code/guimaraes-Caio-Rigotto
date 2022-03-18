import React, { useState, useEffect } from "react";
import { MainContainer } from "./styles";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

function App () {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")
  
  useEffect(() => {
    getPokemon()
  },[])
  
  const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  function changePokeName (event) {
    setPokeName(event.target.value)
  };

  return (
    <MainContainer>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </MainContainer>
  );
}

export default App;
