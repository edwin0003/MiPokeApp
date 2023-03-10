import { imagenUrl } from "../../constants";

function PokeCard({pokemon, getPokemonNumber}) {

  return (
    <div className="pokemon">
      <img src={`${imagenUrl}/${getPokemonNumber(pokemon.url)}.png`} />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default PokeCard;
