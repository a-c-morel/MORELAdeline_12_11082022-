import cheeseburger from "../assets/cheeseburger.png"

export default function LipidsIntake({data}) {
    return (
        <div className="intake-element">
            <div className="intake-img-lipid__background intake-img__background">
                <img src={cheeseburger} alt="" className="intake-img-lipid" />
            </div>
            <div className="intake-text">
                <p className="intake-text__value">{data}g</p>
                <h3 className="intake-text__type">Lipides</h3>
            </div>
        </div>
    )
}