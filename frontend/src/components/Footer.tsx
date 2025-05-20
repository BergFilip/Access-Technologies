import "../styles/components/Footer.scss"
import { useState } from "react";

function Footer() {
    const [copied, setCopied] = useState(false);
    const nipValue = "7772645203";
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__info">
                    <h3>AccessTechnologies</h3>
                    <p>© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="footer__contact">
                    <div className="footer__address">
                        <h4>Adres</h4>
                        <p>ul. Łanowa 19E<br/>62-004 Kicin<br/>Polska</p>
                    </div>

                    <div className="footer__phone-email">
                        <h4>Kontakt</h4>
                        <p>Karol Blige</p>
                        <p>Tel: <a href="tel:+48517624120">+48 517 624 120</a></p>
                        <p>Email: <a href="mailto:biuro@access-technologies.pl">biuro@access-technologies.pl</a></p>
                        <p
                            className="nip"
                            data-nip={nipValue}
                            onClick={(e) => {
                                const nip = e.currentTarget.getAttribute("data-nip");
                                if (!nip) return;

                                navigator.clipboard.writeText(nip);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                            }}
                            title="Kliknij, aby skopiować NIP"
                        >
                            NIP: {nipValue} {copied && <span className="copied">✔</span>}
                        </p>
                    </div>

                    <div className="footer__map">
                        <iframe
                            title="mapa"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.0019309571214!2d16.99014947681779!3d52.49327997202054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045cd7cfa733c1%3A0xc3961ef48fa303e!2s%C5%81anowa%2019E%2C%2062-004%20Kicin!5e0!3m2!1spl!2spl!4v1715860000000!5m2!1spl!2spl"
                            width="100%"
                            height="250"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="footer__social">
                        <h4>Media społecznościowe</h4>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;