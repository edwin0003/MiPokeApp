function PokeSearch({searchPokemon, inputChange}) {
  return (
    <input
      id="search"
      type="text"
      placeholder="Buscar Pokemon"
      value={searchPokemon}
      onChange={inputChange}
    />
  );
}

export default PokeSearch;
