import React, { useState, useEffect } from "react";
import "../pokeApp.css";
import { apiUrl } from "../../constants";
import PokeSearch from "./PokeSearch";
import PokeList from "./PokeList";
function PokeApp() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokecount, setPokecount] = useState([]);

  const onLoadpokemon = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setPokemonList(data.results);
    setPokecount(data.results.length);

  };
  useEffect(() => {
    onLoadpokemon();
  }, []);

  const inputChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    setSearchPokemon(inputValue);
  };


  const filteredPokemons = pokemonList.filter((pokemon) =>
    pokemon.name.includes(searchPokemon.toLowerCase())
    
  );
 
  const countResult =() =>{
    if (filteredPokemons) {
      return filteredPokemons.length
    }else{
      const result = pokecount
    return result;
    }
    
  }

  return (
    <div style={{ display: "grid", gap: "20px" }}>
      <div className="header">
        <div className="title">
          <div>
            <h1>PokeApp</h1>
          </div>
          <div className="input-search">
            <PokeSearch
              searchPokemon={searchPokemon}
              inputChange={inputChange}
            />
          </div>
        </div>
      </div>
      <div>
        <h2>Result: {countResult()}</h2>
      </div>
      <PokeList filteredPokemons={filteredPokemons} pokemonList={pokemonList} searchPokemon={searchPokemon}/>
    </div>
  );
}

export default PokeApp;
