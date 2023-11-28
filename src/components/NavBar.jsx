import React from 'react';

function NavBar({ precedentPokemon, nextPokemon, pokemonIndex, pokemonList }) {
    return (
        <div className="pokemon-navigation">
            {pokemonIndex > 0 && (
                <button onClick={precedentPokemon}>Précédent</button>
            )}
            {pokemonIndex < pokemonList.length - 1 && (
                <button onClick={nextPokemon}>Suivant</button>
            )}
        </div>
    );
}

export default NavBar;