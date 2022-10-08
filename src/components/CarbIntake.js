import apple from "../assets/apple.png"

export default function CarbIntake({data}) {
    return (
        <div className="intake-element">
            <div className="intake-img-carb__background">
                <img src={apple} alt="" className="intake-img-carb"/>
            </div>
            <div className="intake-text">
                <p className="intake-text__value">{data}g</p>
                <h3 className="intake-text__type">Glucides</h3>
            </div>
        </div>
    )
}