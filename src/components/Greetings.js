import PropTypes from "prop-types"

/**
 * 
 * @param {string} name Name of the user
 * @returns a div with greetings and encouragements in french, using the name of the user
 */
export default function Greetings({name}) {

    return (name === undefined) ? (
        <div className="greetings">
            <h2>Utilisateur inconnu.</h2>
        </div>
    ) : (
        <div className="greetings">
            <h2>Bonjour <span>{name}</span></h2>
            <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
    )
}

Greetings.propTypes = {
    name: PropTypes.string.isRequired
}

Greetings.defaultProps = {
    name: 'Utilisateur',
}