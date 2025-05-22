import { useParams, useLocation  } from "react-router-dom";
import { useEffect } from "react";
import { HashLink,  } from "react-router-hash-link";
import "../styles/sites/TechDetail.scss";
import start1 from '../assets/start1.jpg'

const techDetails = {
    ssw: {
        title: "SSW – Systemy Sygnalizacji Włamania",
        subtitle: "Bezpieczeństwo, na którym możesz polegać",
        image: start1,
        content: [
            "Access Technologies oferuje kompleksowe systemy sygnalizacji włamania (SSW), które stanowią pierwszą linię obrony przed nieautoryzowanym dostępem do budynków mieszkalnych, komercyjnych i przemysłowych.",
            "Nasze instalacje alarmowe to zaawansowane technologicznie rozwiązania, które natychmiast wykrywają wszelkie próby wtargnięcia, minimalizując ryzyko strat i zwiększając bezpieczeństwo użytkowników.",
            "Systemy SSW integrujemy z monitoringiem CCTV, automatyką budynkową oraz systemami inteligentnego domu, umożliwiając pełną kontrolę nad bezpieczeństwem – również zdalnie, z poziomu aplikacji mobilnej.",
        ],
        listTitle: "Co obejmują nasze systemy SSW?",
        list: [
            "Nowoczesne czujniki ruchu, zbicia szyby, otwarcia drzwi i okien",
            "Sygnalizatory akustyczne i optyczne",
            "Integracja z systemami monitoringu CCTV i inteligentnego domu",
            "Zdalne zarządzanie alarmem przez aplikację mobilną",
            "Profesjonalne doradztwo, projektowanie, montaż i serwis",
        ],
    },

    cctv: {
        title: "CCTV – Telewizja Przemysłowa",
        subtitle: "Stały nadzór, pełna kontrola",
        image: start1,
        content: [
            "W Access Technologies projektujemy i wdrażamy nowoczesne systemy monitoringu wizyjnego (CCTV), które umożliwiają ciągły nadzór nad mieniem i otoczeniem.",
            "Nasze rozwiązania zwiększają poziom bezpieczeństwa zarówno w obiektach prywatnych, jak i komercyjnych, umożliwiając rejestrację i analizę obrazu w czasie rzeczywistym.",
            "Dobieramy sprzęt do potrzeb klienta, montujemy go zgodnie z normami, a po instalacji zapewniamy pełne wsparcie serwisowe i techniczne.",
        ],
        listTitle: "Nasze systemy CCTV oferują:",
        list: [
            "Kamery IP i analogowe – dopasowane do potrzeb i budżetu",
            "Wysoka jakość obrazu (Full HD, 4K) – doskonała widoczność w dzień i w nocy",
            "Rejestratory NVR/DVR – niezawodne zapisywanie nagrań przez wiele dni",
            "Zdalny dostęp przez aplikację lub przeglądarkę",
            "Funkcje analizy obrazu – detekcja ruchu, rozpoznawanie tablic, twarzy lub stref",
        ],
    },
    skd: {
        title: "SKD – Systemy Kontroli Dostępu",
        subtitle: "Pełna kontrola nad ruchem osób",
        image: start1,
        content: [
            "Systemy Kontroli Dostępu (SKD) wdrażane przez Access Technologies pozwalają na precyzyjne zarządzanie ruchem osób w budynkach i pomieszczeniach o różnym poziomie dostępu.",
            "Nasze rozwiązania zwiększają bezpieczeństwo obiektów, eliminując ryzyko nieautoryzowanego wejścia i umożliwiając rejestrację wszystkich zdarzeń wejścia i wyjścia.",
            "Oferujemy zarówno proste systemy na karty i kody PIN, jak i zaawansowane rozwiązania z wykorzystaniem biometrii oraz integracji z systemami alarmowymi i czasem pracy.",
        ],
        listTitle: "Możliwości naszych systemów SKD:",
        list: [
            "Dostęp na kartę zbliżeniową, kod PIN, odcisk palca lub rozpoznawanie twarzy",
            "Integracja z systemami alarmowymi, CCTV oraz ewidencją czasu pracy (RCP)",
            "Zarządzanie uprawnieniami dostępu z poziomu aplikacji lub przeglądarki",
            "Automatyczne logowanie i raportowanie zdarzeń",
            "Kontrola drzwi, bramek, szlabanów, wind i innych punktów dostępu",
        ],
    },
    lan: {
        title: "LAN – Sieci Komputerowe",
        subtitle: "Niezawodna infrastruktura Twojej komunikacji",
        image: start1,
        content: [
            "Access Technologies projektuje i wdraża nowoczesne lokalne sieci komputerowe (LAN), będące podstawą działania współczesnych firm, instytucji i domów inteligentnych.",
            "Budujemy infrastrukturę, która zapewnia stabilne, szybkie i bezpieczne przesyłanie danych – zarówno w nowopowstałych, jak i modernizowanych obiektach.",
            "Wszystkie nasze sieci spełniają rygorystyczne normy jakości i są przygotowane do pracy w trybie ciągłym 24/7.",
        ],
        listTitle: "Oferujemy kompleksowe usługi:",
        list: [
            "Projektowanie struktury sieci – od rozpoznania potrzeb po dokumentację techniczną",
            "Okablowanie strukturalne – kategoria 5e/6/6a/7, światłowody, organizacja szaf rack",
            "Instalacja i konfiguracja urządzeń – routery, switche, punkty dostępowe",
            "Testowanie i certyfikacja – pomiary parametrów linii i zgodności z normami",
            "Rozbudowa istniejących sieci – integracja z systemami alarmowymi, CCTV, SKD",
        ],
    },
    ssp: {
        title: "SSP – Systemy Przeciwpożarowe",
        subtitle: "Szybka reakcja – maksymalne bezpieczeństwo",
        image: start1,
        content: [
            "Systemy Sygnalizacji Pożaru (SSP) to kluczowy element ochrony życia i mienia. W Access Technologies projektujemy i wdrażamy rozwiązania, które natychmiast wykrywają zagrożenie pożarem i uruchamiają odpowiednie procedury alarmowe.",
            "Nasze systemy są zgodne z obowiązującymi normami i mogą być integrowane z innymi instalacjami bezpieczeństwa: monitoringiem, kontrolą dostępu czy systemem oddymiania.",
            "Oferujemy pełną dokumentację, projekt, montaż, serwis oraz szkolenie personelu z obsługi instalacji.",
        ],
        listTitle: "Co oferujemy w zakresie SSP?",
        list: [
            "Detektory dymu, ciepła i płomienia – dopasowane do specyfiki obiektu",
            "Sygnalizatory optyczne i akustyczne – informujące o zagrożeniu pożarowym",
            "Centrale SSP z nadzorem strefowym – natychmiastowa lokalizacja źródła zagrożenia",
            "Integracja z systemami oddymiania, ewakuacji i monitoringiem",
            "Certyfikowany montaż i okresowe przeglądy techniczne",
        ],
    },
    elektryczne: {
        title: "Instalacje Elektryczne",
        subtitle: "Bezpieczne zasilanie każdej inwestycji",
        image: start1,
        content: [
            "Access Technologies oferuje kompleksowe usługi z zakresu instalacji elektrycznych – od projektowania po realizację i odbiory techniczne.",
            "Realizujemy zarówno instalacje w nowoczesnych budynkach, jak i modernizacje istniejących systemów. Gwarantujemy bezpieczeństwo, zgodność z normami i wieloletnią trwałość.",
            "Nasze ekipy posiadają odpowiednie uprawnienia SEP oraz doświadczenie w projektach domowych, komercyjnych i przemysłowych.",
        ],
        listTitle: "W ramach usługi oferujemy:",
        list: [
            "Instalacje elektryczne wewnętrzne i zewnętrzne – mieszkania, domy, hale przemysłowe, biura",
            "Rozdzielnice, zabezpieczenia, wyłączniki i zasilanie awaryjne (UPS)",
            "Oświetlenie LED, inteligentne systemy sterowania, automatyka oświetleniowa",
            "Podłączenia RTV, AGD, maszyn, urządzeń przemysłowych i serwerowni",
            "Pomiary, protokoły, przeglądy techniczne i dokumentacja powykonawcza",
        ],
    },
    domofony: {
        title: "Domofony i Wideodomofony",
        subtitle: "Bezpieczna komunikacja na wejściu",
        image: start1,
        content: [
            "Dostarczamy nowoczesne systemy domofonowe i wideodomofonowe, które zwiększają bezpieczeństwo i komfort użytkowników.",
            "Możliwość zdalnej weryfikacji osób próbujących wejść do budynku pozwala ograniczyć dostęp osobom nieupoważnionym.",
            "Obsługujemy inwestycje jedno- i wielorodzinne, obiekty komercyjne oraz przemysłowe.",
        ],
        listTitle: "Co oferujemy?",
        list: [
            "Domofony audio i wideo – jedno- i wielorodzinne",
            "Systemy IP, cyfrowe oraz analogowe – dopasowane do wielkości i typu obiektu",
            "Integracja z kontrolą dostępu i monitoringiem",
            "Obsługa z poziomu smartfona (aplikacje mobilne)",
            "Montaż, konfiguracja, serwis i modernizacja istniejących instalacji",
        ],
    },
    "automatyka-bram": {
        title: "Automatyka Bram",
        subtitle: "Komfort i bezpieczeństwo w codziennym użytkowaniu",
        image: start1,
        content: [
            "Access Technologies montuje i integruje systemy automatyki do bram wjazdowych, garażowych i szlabanów.",
            "Dzięki nowoczesnym napędom i sterownikom zapewniamy wygodę użytkowania, bezpieczeństwo oraz pełną kontrolę dostępu.",
            "Nasze rozwiązania sprawdzają się w domach prywatnych, na osiedlach mieszkaniowych i w przemyśle.",
        ],
        listTitle: "Oferujemy systemy dla:",
        list: [
            "Bram przesuwnych i skrzydłowych – automatyka dopasowana do ciężaru i intensywności użytkowania",
            "Bram garażowych (segmentowych i uchylnych) – napędy z pilotami i aplikacjami mobilnymi",
            "Szlabanów i zapór drogowych – sterowane zdalnie, kartą, telefonem lub zintegrowane z kontrolą dostępu",
            "Systemów inteligentnego domu i wideodomofonów – pełna automatyzacja i kontrola",
        ],
    },
};

function TechDetail() {
    const { slug } = useParams();
    const location = useLocation();

    if (!slug || !(slug in techDetails)) {
        return <p>Technologia nie znaleziona.</p>;
    }

    const tech = techDetails[slug];

    useEffect(() => {
        if (location.hash === "#tech-detail") {
            const el = document.getElementById("tech-detail");
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);

    return (
        <section className="tech-detail" id={"tech-detail"}>
            <div className="container">
                <div style={{ marginBottom: "1rem" }}>
                    <HashLink smooth to="/Access-Technologies/#technologies" className="back-button" id={"back-button"}>
                        ← Powrót do technologii
                    </HashLink>
                </div>

                <h1>{tech.title}</h1>
                {tech.subtitle && <p className="subtitle">{tech.subtitle}</p>}

                <div className="content-row">
                    <div className="text">
                        {tech.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="image">
                        <img src={tech.image} alt={tech.title} />
                    </div>
                </div>

                <div className="tech_services">
                    <h2>{tech.listTitle}</h2>
                    <ul>
                        {tech.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TechDetail;
