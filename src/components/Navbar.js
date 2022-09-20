import logo from '../assets/logo.png'
import {NavLink} from "react-router-dom"

export default function Navbar() {
    
    return(
        <nav>
            <NavLink to="/">
                <div>
                <img src={logo} alt="logo" />
                <h1>SportSee</h1>
                </div>
            </NavLink>
            <ul>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglages</li>
                <li>Communauté</li>
            </ul>
        </nav>
    )
}