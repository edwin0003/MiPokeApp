import React, { useState, useEffect } from "react";
import "../pokeApp.css";
import { apiUrl } from "../../constants";
import PokeCard from "./PokeCard";
import PokeSearch from "./PokeSearch";
import PokeList from "./PokeList";
function PokeApp() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");

  const onLoadpokemon = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setPokemonList(data.results);
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
      {/* <div className="responsive-card">
        {(searchPokemon === "" ? pokemonList : filteredPokemons).map(
          (pokemon) => (
            <PokeCard
              key={pokemon.name}
              pokemon={pokemon}
              getPokemonNumber={() => getPokemonNumber(pokemon.url)}
            />
          )
        )}
      </div> */}
      <PokeList filteredPokemons={filteredPokemons} pokemonList={pokemonList} searchPokemon={searchPokemon}/>
    </div>
  );
}

export default PokeApp;
