import "../styles/components/Services.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GiCctvCamera, GiFireShield, GiOpenGate } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa";
import { FaIntercom } from "react-icons/fa";
import { MdLan } from "react-icons/md";
import { PiPlugDuotone } from "react-icons/pi";
import { IoIosLock } from "react-icons/io";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

function Services() {
    const servicesData = [
        {
            icon: <IoIosLock />,
            title: 'SSW',
            subtitle: 'Instalacje systemów alarmowych',
            description: 'Profesjonalny montaż i konfiguracja systemów alarmowych zapewniających ochronę mienia i osób. Instalacje obejmują czujniki ruchu, kontaktrony, sygnalizatory oraz centralę alarmową, gwarantując szybkie wykrycie zagrożenia i skuteczne reagowanie.',
        },
        {
            icon: <GiCctvCamera />,
            title: 'CCTV',
            subtitle: 'Instalacje systemów telewizji przemysłowej',
            description: 'Montaż i konfiguracja nowoczesnych systemów monitoringu wizyjnego, które umożliwiają stałą kontrolę nad obiektami i terenami. Systemy CCTV poprawiają bezpieczeństwo dzięki rejestracji obrazu w wysokiej jakości oraz możliwości zdalnego podglądu na żywo.',
        },
        {
            icon: <FaDoorOpen />,
            title: 'SKD',
            subtitle: 'Instalacje systemów kontroli dostępu',
            description: 'Profesjonalny montaż systemów umożliwiających kontrolę i zarządzanie wejściami do budynków oraz pomieszczeń. Systemy kontroli dostępu zapewniają bezpieczne i wygodne sterowanie ruchem osób, wykorzystując karty, kody PIN, czy biometrię.',
        },
        {
            icon: <MdLan />,
            title: 'LAN',
            subtitle: 'Instalacje sieci komputerowych',
            description: 'Projektowanie i instalacja lokalnych sieci komputerowych, które zapewniają szybki i stabilny przesył danych w firmach i instytucjach. Systemy LAN umożliwiają efektywną komunikację, współdzielenie zasobów oraz dostęp do internetu.',
        },
        {
            icon: <GiFireShield />,
            title: 'SSP',
            subtitle: 'Instalacje przeciwpożarowe',
            description: 'Montaż i konfiguracja systemów wykrywania i sygnalizacji pożaru, które szybko informują o zagrożeniu. Systemy SSP zwiększają bezpieczeństwo osób i mienia, umożliwiając natychmiastową reakcję na powstanie pożaru.',
        },
        {
            icon: <PiPlugDuotone />,
            title: 'Instalacje elektryczne',
            subtitle: '',
            description: 'Kompleksowy montaż i modernizacja instalacji elektrycznych, zapewniających bezpieczne i niezawodne zasilanie budynków. Wykonujemy instalacje zgodne z obowiązującymi normami, dbając o optymalną wydajność i ochronę przeciwporażeniową.',
        },
        {
            icon: <FaIntercom />,
            title: 'Instalacje domofonowe, videodomofonowe',
            subtitle: '',
            description: 'Montaż systemów komunikacji głosowej i wideo, które umożliwiają kontrolę dostępu do budynków oraz bezpieczną identyfikację gości. Videodomofony dodatkowo zapewniają podgląd obrazu, zwiększając komfort i bezpieczeństwo użytkowników.',
        },
        {
            icon: <GiOpenGate />,
            title: 'Instalacje automatyki bram',
            subtitle: '',
            description: 'Profesjonalny montaż systemów automatycznego otwierania i zamykania bram wjazdowych oraz garażowych. Instalacje zwiększają wygodę użytkowania i bezpieczeństwo, umożliwiając zdalne sterowanie oraz integrację z innymi systemami zabezpieczeń.',
        },
    ]
    return (
        <section className={"services"}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={3}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 10000, // 10 sekund
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    1024: { slidesPerView: 3, slidesPerGroup: 3 },
                    768: { slidesPerView: 2, slidesPerGroup: 2 },
                    0: { slidesPerView: 1, slidesPerGroup: 1 },
                }}
            >
                {servicesData.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="service">
                            <span className={'icon'}>{service.icon}</span>
                            <h3>{service.title}</h3>
                            <h4>{service.subtitle}</h4>
                            <p className="description">{service.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Services;