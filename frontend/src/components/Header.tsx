import "../styles/components/Header.scss"
import { HashLink } from "react-router-hash-link";
import logo from '../assets/Logo.png'

function Header(){
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="AccessTechnologies Logo"/>
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <div><HashLink smooth to="/Access-Technologies/#start">Główna</HashLink></div>
                    </li>
                    <li>
                        <div><HashLink smooth to="/Access-Technologies/#services">Usługi</HashLink></div>
                    </li>
                    <li>
                        <div><HashLink smooth to="/Access-Technologies/#about">O nas</HashLink></div>
                    </li>
                    <li>
                        <div><HashLink smooth to="/Access-Technologies/#technologies">Technologie</HashLink></div>
                    </li>
                    <li>
                        <div><HashLink smooth to="/Access-Technologies/#realizations">Realizacje</HashLink></div>
                    </li>
                    <li>
                        <div><HashLink smooth to="/Access-Technologies/#contact">Kontakt</HashLink></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;