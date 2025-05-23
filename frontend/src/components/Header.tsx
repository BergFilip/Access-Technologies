import "../styles/components/Header.scss";
import { HashLink } from "react-router-hash-link";
import logo from '../assets/Logo.png';
import { useState } from "react";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="AccessTechnologies Logo"/>
            </div>

            <div className="burger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`header__nav ${menuOpen ? "mobile-visible" : "mobile-hidden"}`}>
                <ul>
                    <li><div><HashLink smooth to="/Access-Technologies/#start" onClick={() => setMenuOpen(false)}>Główna</HashLink></div></li>
                    <li><div><HashLink smooth to="/Access-Technologies/#services" onClick={() => setMenuOpen(false)}>Usługi</HashLink></div></li>
                    <li><div><HashLink smooth to="/Access-Technologies/#about" onClick={() => setMenuOpen(false)}>O nas</HashLink></div></li>
                    <li><div><HashLink smooth to="/Access-Technologies/#technologies" onClick={() => setMenuOpen(false)}>Technologie</HashLink></div></li>
                    <li><div><HashLink smooth to="/Access-Technologies/#realizations" onClick={() => setMenuOpen(false)}>Realizacje</HashLink></div></li>
                    <li><div><HashLink smooth to="/Access-Technologies/#contact" onClick={() => setMenuOpen(false)}>Kontakt</HashLink></div></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
