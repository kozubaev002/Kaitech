import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper/modules";

import styles from "./BlockAchievements.module.scss";

import Img1 from "../../assets/svg/kaitech.svg";
import Img2 from "../../assets/image/kaitechFoto.png";
import Img10 from "../../assets/image/Nursultan Ulan uulu.jpg";
import Img11 from "../../assets/image/kaitech.png";

export const BlockAchievements: React.FC = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <Swiper
                    grabCursor={true}
                    effect="creative"
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    creativeEffect={{
                        prev: { shadow: true, translate: [0, 0, -400] },
                        next: { translate: ["100%", 0, 0] },
                    }}
                    modules={[EffectCreative, Autoplay]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img10} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img11} alt="" /></SwiperSlide>
                </Swiper>

                <div className={styles.textBlock}>
                    <p>
                        Наша команда заняла второе место на хакатоне <b>“StartUp Nation”</b>{" "}
                        с проектом <b>“Unikurs.kg”</b>, помогающий будущим абитуриентам со
                        сдачей ОРТ. Вместе с нашей командой вы сможете реализовать свои
                        стартап идеи и воплотить в жизнь свои интересные задумки.
                    </p>
                </div>
            </div>
        </div>
    );
};
