import PropTypes from 'prop-types';
function PokemonCard(props) {
    console.log(props);
    const { pokemon } = props;

    return (
        <figure className="pokemon-card">
            <figcaption>{pokemon.name}</figcaption>
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
        </figure>
    );
}
PokemonCard.PropTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
};


export default PokemonCard;
