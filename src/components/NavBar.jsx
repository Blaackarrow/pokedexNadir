import React from 'react';

function NavBar({ pokemonList, handlePokemonSelected }) {
    const handlePokemonSelectedPikachu = (index) => {
        if (pokemonList[index].name === "pikachu") {
            alert("Pika Pikachuuu !!!");
        }
        handlePokemonSelected(index);
    };

    return (
        <div className="pokemon-navigation">
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handlePokemonSelectedPikachu(index)}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar;