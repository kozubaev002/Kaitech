import React from "react";
import styles from "./Swiper.module.scss";
import Ainazik from "../../assets/image/Ainazik.jpg"
import Alima from "../../assets/image/Alima.jpg"
import Asyl from "../../assets/image/Asyl.jpg"
import Aziret from "../../assets/image/Aziret.jpg"
import Aziret2 from "../../assets/image/Aziret@.jpg"
import Bakyt from "../../assets/image/Bakyt.jpg"
import Elmira from "../../assets/image/Elmira.jpg"
import me from "../../assets/image/It is me.jpg"
import Nursultan from "../../assets/image/Nursultan.jpg"
import Nurzada from "../../assets/image/Nurzada.jpg"
import Nurzada2 from "../../assets/image/Nurzada2.jpg"
import Raha from "../../assets/image/Raha.jpg"
import Saridin from "../../assets/image/Saridin.jpg"
import Baiel from "../../assets/image/Baiel.jpg"

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const SwiperDemo: React.FC = () => {
    return (
        <div className="container">
        <section className={styles.swiperContainer} aria-label="Наши проекты">
            <h2 className={styles.title}>Наши проекты</h2>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                slidesPerView={1.6}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
            >
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Ainazik} alt="Ainazik" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Alima} alt="Alima" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Asyl} alt="Asyl" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Aziret} alt="Aziret" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Aziret2} alt="Aziret2" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Bakyt} alt="Bakyt" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Elmira} alt="Elmira" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={me} alt="me" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Nursultan} alt="Nursultan" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Nurzada} alt="Nurzada" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Nurzada2} alt="Nurzada2" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Raha} alt="Raha" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Saridin} alt="Saridin" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={Baiel} alt="Baiel" loading="lazy"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
        </div>
    );
};

export default SwiperDemo;