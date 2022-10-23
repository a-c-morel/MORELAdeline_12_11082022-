import chicken from "../assets/chicken.png"

/**
 * 
 * @param {string} amountOfProteins - Amount of proteins of the user
 * @returns a div with an icon and the number of proteins of the user with the word "proteins"
 * translated in french, for example "155g Protéines"
 */
export default function ProteinsIntake({amountOfProteins}) {
    return (
        <div className="intake-element">
            <div className="intake-img-proteins__background intake-img__background">
                <img src={chicken} alt="" className="intake-img-proteins"/>
            </div>
            <div className="intake-text">
                <p className="intake-text__value">{amountOfProteins}g</p>
                <h3 className="intake-text__type">Protéines</h3>
            </div>
        </div>
    )
}