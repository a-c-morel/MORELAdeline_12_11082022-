import energy from "../assets/energy.png"
import PropTypes from 'prop-types'

/**
 * Render a div with an icon and the number of calories of the user, for example "1930kCal Calories"
 * @param {string} amountOfCalories - Amount of calories of the user 
 * @returns {React.ReactElement}
 */
function CaloriesIntake({amountOfCalories}) {
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
    amountOfCalories: PropTypes.string
}
CaloriesIntake.defaultProps = {
    amountOfCalories: "Loading..."
}

export default CaloriesIntake