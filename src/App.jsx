import PokemonCard from "./components/PokemonCard"
import { useState } from "react";

function App() {

  const pokemonList = [
    {
      name: "bulbizarre",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "salamèche",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "carapuce",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
    },
    {
      name: "mewto",
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
    },
  ];
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const selectedPokemon = pokemonList[pokemonIndex];

  const precedentPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  const nextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };


  return (
    <div className="App">
      <div className="pokemon-navigation">
        {pokemonIndex > 0 && (
          <button onClick={precedentPokemon}>Précédent</button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={nextPokemon}>Suivant</button>
        )}
      </div>
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App
