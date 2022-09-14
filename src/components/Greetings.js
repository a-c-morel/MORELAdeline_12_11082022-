export default function Greetings({name}) {
    if (name === undefined) {
        return null
    }
    return(
        <div>
            <h1>Bonjour {name}</h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    )
}