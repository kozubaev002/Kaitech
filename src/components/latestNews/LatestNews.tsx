import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper/modules";

import styles from "./LatestNews.module.scss";

import Img1 from "../../assets/svg/kaitech.svg";
import Img2 from "../../assets/image/kaitechFoto.png";
import Img10 from "../../assets/image/Nursultan Ulan uulu.jpg";
import Img11 from "../../assets/image/kaitech.png";

export const LatestNews: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [titleActive, setTitleActive] = useState(false);
    const [textActive, setTextActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setTitleActive(true);
            },
            { threshold: 0.25 }
        );
        const observerText = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setTextActive(true);
            },
            { threshold: 0. }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        if (textRef.current) observerText.observe(textRef.current);
    }, []);

    return (
        <div className="container">
            <h2
                ref={titleRef}
                className={`${styles.title} ${titleActive ? styles.active : ""}`}
            >
                Последние новости
            </h2>

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
                    centeredSlides={true}
                >
                    {[Img1, Img2, Img10, Img11].map((img, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <img src={img} alt={`Slide ${index + 1}`} loading="lazy" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div
                    ref={textRef}
                    className={`${styles.textBlock} ${textActive ? styles.active : ""}`}
                >
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
