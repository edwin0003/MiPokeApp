import PokeCard from "./PokeCard";
function PokeList({searchPokemon, pokemonList, filteredPokemons}){
    const getPokemonNumber = (url) => {
        const parts = url.split("/");
        return parts[parts.length - 2];
      };
    return(
        <div className="responsive-card">
        {(searchPokemon === "" ? pokemonList : filteredPokemons).map(
          (pokemon) => (
            <PokeCard
              key={pokemon.name}
              pokemon={pokemon}
              getPokemonNumber={() => getPokemonNumber(pokemon.url)}
            />
          )
        )}
      </div>
    )
}

export default PokeList;