import logo from '../assets/logo-with-text.png'
import {NavLink} from "react-router-dom"

/**
 * Render nav element with the logo and an unordered list for navigation.
 * The first li, as for the logo, are a link to HomePage.
 * @returns {React.ReactElement}
 */
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