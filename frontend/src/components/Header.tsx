import "../styles/components/Header.scss"

function Header(){
    return (
        <header className="header">
            <div className="header__logo">
                <img src="../src/assets/Logo.png" alt="AccessTechnologies Logo"/>
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <div><a href="/">Główna</a></div>
                    </li>
                    <li>
                        <div><a href="/#services">Usługi</a></div>
                    </li>
                    <li>
                        <div><a href="/#about">O nas</a></div>
                    </li>
                    <li>
                        <div><a href="/#technologies">Technologie</a></div>
                    </li>
                    <li>
                        <div><a href="/#realizations">Realizacje</a></div>
                    </li>
                    <li>
                        <div><a href="/#contact">Kontakt</a></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;