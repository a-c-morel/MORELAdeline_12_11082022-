import PropTypes from "prop-types"

export default function Greetings({name}) {
    if (name === undefined) {
        return null
    }
    return(
        <div>
            <h2>Bonjour {name}</h2>
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