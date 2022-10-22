import energy from "../assets/energy.png"
import PropTypes from "prop-types"

/**
 * 
 * @param {string} amountOfCalories - Amount of calories of the user 
 * @returns a div with an icon and the number of calories of the user, for example "1930kCal Calories"
 */
export default function CaloriesIntake({amountOfCalories}) {
    return (
        <div className="intake-element">
            <div className="intake-img-energy__background intake-img__background">
                <img src={energy} alt="" className="intake-img-energy"/>
            </div>
            <div className="intake-text">
                <p className="intake-text__value">{amountOfCalories}kCal</p>
                <h3 className="intake-text__type">Calories</h3>
            </div>
        </div>
    )
}

CaloriesIntake.propTypes = {
    amountOfCalories: PropTypes.string.isRequired
}

CaloriesIntake.defaultProps = {
    amountOfCalories: 'erreur',
}