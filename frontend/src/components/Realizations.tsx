import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import start2 from '../assets/start2.webp'

import "../styles/components/Realizations.scss";

const realizations = [
    {
        image: start2,
        description: "Montaż systemu alarmowego w domu jednorodzinnym – Poznań",
    },
    {
        image: start2,
        description: "Instalacja monitoringu CCTV w hali przemysłowej – Swarzędz",
    },
    {
        image: start2,
        description: "Kompleksowa automatyka bramy – dom prywatny – Luboń",
    },
    {
        image: start2,
        description: "System kontroli dostępu i LAN w biurowcu – Poznań",
    },
];

function Realizations() {
    return (
        <section className="realizations">
            <div className="container">
                <h2>Nasze Realizacje</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {realizations.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="realization-card">
                                <img src={item.image} alt={`Realizacja ${index + 1}`} />
                                <div className="overlay">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Realizations;
