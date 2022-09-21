import logo from '../assets/logo-with-text.png'
import {NavLink} from "react-router-dom"

export default function Navbar() {
    
    return(
        <nav>
            <NavLink to="/">
                <div className="logo">
                <img src={logo} alt="logo" />
                </div>
            </NavLink>
            <ul className="navigation">
                <li><NavLink to="/">Accueil</NavLink></li>
                <li>Profil</li>
                <li>Réglages</li>
                <li>Communauté</li>
            </ul>
        </nav>
    )
}