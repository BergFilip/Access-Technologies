import "../styles/components/About.scss"

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about__text">
                    <h2>O nas</h2>
                    <p>
                        Jesteśmy firmą specjalizującą się w projektowaniu i montażu
                        zaawansowanych systemów bezpieczeństwa dla domów i firm.
                        Nasze wieloletnie doświadczenie oraz indywidualne podejście
                        do klienta pozwalają nam oferować rozwiązania dopasowane do
                        rzeczywistych potrzeb. Stawiamy na jakość, nowoczesność i niezawodność.
                    </p>

                    <div className="about__facts">
                        <div className="fact">
                            <h3>2007</h3>
                            <p>Rok założenia</p>
                        </div>
                        <div className="fact">
                            <h3>500+</h3>
                            <p>Zrealizowanych zleceń</p>
                        </div>
                        <div className="fact">
                            <h3>98%</h3>
                            <p>Poziom satysfakcji klientów</p>
                        </div>
                    </div>
                </div>

                <div className="about__image">
                    <img src="/src/assets/Logo.png" alt="O nas"/>
                </div>
            </div>
        </section>
    )
}

export default About;