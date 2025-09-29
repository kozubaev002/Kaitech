import React from "react";
import styles from "./Swiper.module.scss";
import img from "../../assets/image/imageStudents.png";

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
                    <div className={styles.slide}>1</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>2</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={img} alt="Student" loading="lazy"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>4</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>5</div>
                </SwiperSlide>
            </Swiper>
        </section>
        </div>
    );
};

export default SwiperDemo;