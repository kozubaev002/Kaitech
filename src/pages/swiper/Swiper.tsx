import React from "react";
import styles from "./Swiper.module.scss";
import Img from "../../assets/image/imageStudents.png";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const SwiperDemo: React.FC = () => {
    return (
        <div className={styles.swiperContainer}>
            <h2 className={styles.title}>Наши проекты</h2>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                slidesPerView={1.4}
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
                        <img src={Img} alt="Student"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>4</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>5</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperDemo;