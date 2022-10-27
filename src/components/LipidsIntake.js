import cheeseburger from "../assets/cheeseburger.png"
import PropTypes from "prop-types"

/**
 * Render a div with an icon and the number of proteins of the user with the word "proteins" translated in french, for example "120g Lipides"
 * @param {string} amoutOfLipids - Amount of lipids of the user 
 * @returns {React.ReactElement}
 */
export default function LipidsIntake({amountOfLipids}) {
    return (
        <div className="intake-element">
            <div className="intake-img-lipid__background intake-img__background">
                <img src={cheeseburger} alt="" className="intake-img-lipid" />
            </div>
            <div className="intake-text">
                <p className="intake-text__value">{amountOfLipids}g</p>
                <h3 className="intake-text__type">Lipides</h3>
            </div>
        </div>
    )
}

LipidsIntake.propTypes = {
    amountOfLipids: PropTypes.string
}
LipidsIntake.defaultProps = {
    amountOfLipids: "Loading..."
}