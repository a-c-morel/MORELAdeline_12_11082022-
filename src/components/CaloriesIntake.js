import energy from "../assets/energy.png"

export default function CaloriesIntake({data}) {
    return (
        <div className="intake-element">
            <img src={energy} alt="" />
            <div className="intake__text">
                <p>{data}kCal</p>
                <h3>Calories</h3>
            </div>
        </div>
    )
}