import apple from "../assets/apple.png"
import PropTypes from "prop-types"

/**
 * 
 * @param {string} amountOfCarbs - Amount of carbohydrates of the user
 * @returns a div with an icon and the number of carbohydrates of the user with the word "carbohydrates"
 * translated in french, for example "150g Glucides"
 */
export default function CarbIntake({amountOfCarbs}) {
    return (
        <div className="intake-element">
            <div className="intake-img-carb__background intake-img__background">
                <img src={apple} alt="" className="intake-img-carb"/>
            </div>
            <div className="intake-text">
                <p className="intake-text__value">{amountOfCarbs}g</p>
                <h3 className="intake-text__type">Glucides</h3>
            </div>
        </div>
    )
}

CarbIntake.propTypes = {
    amountOfCarbs: PropTypes.string.isRequired
}

CarbIntake.defaultProps = {
    amountOfCarbs: 'erreur',
}