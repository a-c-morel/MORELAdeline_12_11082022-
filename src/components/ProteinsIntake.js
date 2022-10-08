import chicken from "../assets/chicken.png"

export default function ProteinsIntake({data}) {
    return (
        <div className="intake-element">
            <div className="intake-img-proteins__background">
                <img src={chicken} alt="" className="intake-img-proteins"/>
            </div>
            <div className="intake-text">
                <p className="intake-text__value">{data}g</p>
                <h3 className="intake-text__type">Protéines</h3>
            </div>
        </div>
    )
}