import { useState, useEffect } from "react";
import "../styles/components/Start.scss";
import start1 from '../assets/start1.jpg'
import start2 from '../assets/start2.webp'
import start3 from '../assets/start3.jpg'

const slides  = [
    {
        h1: "Profesjonalny montaż systemów bezpieczeństwa",
        h2: "Dla domu i firmy",
        bg: start1,
    },
    {
        h1: "Nowoczesne rozwiązania zabezpieczeń",
        h2: "Skrojone na miarę Twoich potrzeb",
        bg: start2,
    },
    {
        h1: "Monitoring 24/7 z gwarancją jakości",
        h2: "Bezpieczeństwo, na które możesz liczyć",
        bg: start3,
    },
];


function Start() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % slides.length);
                setFade(true);
            }, 200);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="start"
            style={{ backgroundImage: `url(${slides[index].bg})` }}
        >
            <div className={`container ${fade ? "fade-active" : ""}`}>
                <h1>{slides[index].h1}</h1>
                <h2>{slides[index].h2}</h2>
            </div>
        </section>
    );
}

export default Start;