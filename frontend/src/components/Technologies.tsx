import "../styles/components/Technologies.scss";
import { Link } from "react-router-dom";
import { GiCctvCamera, GiFireShield, GiOpenGate } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa";
import { FaIntercom } from "react-icons/fa";
import { MdLan } from "react-icons/md";
import { PiPlugDuotone } from "react-icons/pi";
import { IoIosLock } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

const technologies = [
    {
        icon: <IoIosLock />,
        name: "SSW – Systemy Sygnalizacji Włamania",
        short: "Systemy alarmowe wykrywające nieautoryzowane wejścia i próby włamania.",
        slug: "ssw",
    },
    {
        icon: <GiCctvCamera />,
        name: "CCTV – Telewizja Przemysłowa",
        short: "Nowoczesny monitoring wizyjny umożliwiający podgląd i rejestrację obrazu.",
        slug: "cctv",
    },
    {
        icon: <FaDoorOpen />,
        name: "SKD – Systemy Kontroli Dostępu",
        short: "Zarządzanie dostępem do pomieszczeń za pomocą kart, kodów i biometrii.",
        slug: "skd",
    },
    {
        icon: <MdLan />,
        name: "LAN – Sieci Komputerowe",
        short: "Lokalne sieci transmisji danych zapewniające szybki przesył informacji.",
        slug: "lan",
    },
    {
        icon: <GiFireShield />,
        name: "SSP – Systemy Przeciwpożarowe",
        short: "Czujniki i sygnalizatory ostrzegające o zagrożeniu pożarowym.",
        slug: "ssp",
    },
    {
        icon: <PiPlugDuotone />,
        name: "Instalacje Elektryczne",
        short: "Kompleksowe zasilanie budynków zgodne z normami bezpieczeństwa.",
        slug: "elektryczne",
    },
    {
        icon: <FaIntercom />,
        name: "Domofony i Wideodomofony",
        short: "Systemy głosowe i wideo do identyfikacji i wpuszczania gości.",
        slug: "domofony",
    },
    {
        icon: <GiOpenGate />,
        name: "Automatyka Bram",
        short: "Sterowanie bramami zdalnie lub automatycznie dla wygody i bezpieczeństwa.",
        slug: "automatyka-bram",
    },
];

function Technologies() {
    return (
        <section className="technologies">
            <div className="container">
                <h2>Wykorzystywane Technologie</h2>
                <p className="intro">
                    Nasze instalacje opierają się na sprawdzonych i nowoczesnych rozwiązaniach.
                </p>

                <div className="tech-list" id={"tech-list"}>
                    {technologies.map((tech, idx) => (
                        <div className="tech-card" key={idx}>
                            <div className="icon">{tech.icon}</div>
                            <h3>{tech.name}</h3>
                            <p>{tech.short}</p>
                            <Link to={`/Access-Technologies/technologie/${tech.slug}/#tech-detail`} className="more-link">
                                Dowiedz się więcej →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technologies;
