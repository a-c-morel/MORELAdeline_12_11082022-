import cheeseburger from "../assets/cheeseburger.png"

export default function LipidsIntake({data}) {
    return (
        <div className="intake-element">
            <img src={cheeseburger} alt="" />
            <div className="intake__text">
                <p>{data}g</p>
                <h3>Lipides</h3>
            </div>
        </div>
    )
}