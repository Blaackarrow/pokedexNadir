import React from 'react';

function NavBar({ pokemonList, handlePokemonSelected }) {
    return (
        <div className="pokemon-navigation">
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handlePokemonSelected(index)}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar;