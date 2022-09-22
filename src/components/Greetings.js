import PropTypes from "prop-types"

export default function Greetings({data}) {

    const [name] = data.map(userGeneral => userGeneral.userInfos.firstName)

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