const pokemonList = [
    {
        name: "bulbizarre",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];
function PokemonCard() {
    const pokemon = pokemonList[1];

    return (
        <figure>
            <figcaption>{pokemon.name}</figcaption>
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
        </figure>
    );
}

export default PokemonCard;
