import icon001 from '../assets/icon001.png'
import icon002 from '../assets/icon002.png'
import icon003 from '../assets/icon003.png'
import icon004 from '../assets/icon004.png'

export default function Aside() {
    
    return(
        <aside>
            <ul>
                <li><img src={icon001} alt="" /></li>
                <li><img src={icon002} alt="" /></li>
                <li><img src={icon003} alt="" /></li>
                <li><img src={icon004} alt="" /></li>
            </ul>
            <p>Copiryght, SportSee 2020</p>
        </aside>
    )
}