import apple from "../assets/apple.png"

export default function CarbIntake({data}) {
    return (
        <div className="intake-element">
            <img src={apple} alt="" />
            <div className="intake__text">
                <p>{data}g</p>
                <h3>Glucides</h3>
            </div>
        </div>
    )
}