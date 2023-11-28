
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {

  const pokemonList = [
    {
      name: "bulbizarre",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "herbizarre",
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    },
    {
      name: "florizarre",
      imgSrc: "https://www.123-stickers.com/7672-thickbox/autocollant-florizarre-pokemon-003.jpg",
    },
    {
      name: "salamèche",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "reptincel",
      imgSrc: "https://www.pokepedia.fr/images/thumb/6/64/Reptincel-RFVF.png/250px-Reptincel-RFVF.png",
    },
    {
      name: "dracaufeu",
      imgSrc: "https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/800px-Dracaufeu-RFVF.png",
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
  const handlePokemonSelected = (index) => {
    setPokemonIndex(index);
  };


  return (
    <div className="App">
      <NavBar
        handlePokemonSelected={handlePokemonSelected}
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}
        precedentPokemon={precedentPokemon}
        nextPokemon={nextPokemon}
      />
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App
