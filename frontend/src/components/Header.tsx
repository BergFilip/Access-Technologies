import "../styles/components/Header.scss"
import { HashLink } from "react-router-hash-link";

function Header(){
    return (
        <header className="header">
            <div className="header__logo">
                <img src="../src/assets/Logo.png" alt="AccessTechnologies Logo"/>
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <div><HashLink smooth to="/#start">Główna</HashLink></div>
                    </li>
                    <li>
                        <div><HashLink smooth to="/#services">Usługi</HashLink></div>
                    </li>
                    <li>
                        <div><HashLink smooth to="/#about">O nas</HashLink></div>
                    </li>
                    <li>
                        <div><HashLink smooth to="/#technologies">Technologie</HashLink></div>
                    </li>
                    <li>
                        <div><HashLink smooth to="/#realizations">Realizacje</HashLink></div>
                    </li>
                    <li>
                        <div><HashLink smooth to="/#contact">Kontakt</HashLink></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;