import energy from "../assets/energy.png"

export default function CaloriesIntake({data}) {
    return (
        <div className="intake-element">
            <div className="intake-img-energy__background">
                <img src={energy} alt="" className="intake-img-energy"/>
            </div>
            <div className="intake-text">
                <p className="intake-text__value">{data}kCal</p>
                <h3 className="intake-text__type">Calories</h3>
            </div>
        </div>
    )
}