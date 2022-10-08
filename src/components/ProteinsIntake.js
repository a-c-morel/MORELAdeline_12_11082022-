import chicken from "../assets/chicken.png"

export default function CaloriesIntake({data}) {
    return (
        <div className="intake-element">
            <img src={chicken} alt="" />
            <div className="intake__text">
                <p>{data}g</p>
                <h3>Protéines</h3>
            </div>
        </div>
    )
}