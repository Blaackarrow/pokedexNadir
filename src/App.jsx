import PokemonCard from "./components/PokemonCard"

function App() {
  const pokemonList = [
    {
      name: "bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
    {
      name: "mewto",
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
    },
  ];
  const selectedPokemon = pokemonList[1];

  return (
    <div className="App">
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App
