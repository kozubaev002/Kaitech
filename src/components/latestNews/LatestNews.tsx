import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay } from "swiper/modules";
import styles from "./LatestNews.module.scss";

import Img1 from "../../assets/image/kaitechFoto.png";
import Img2 from "../../assets/image/2025.jpg"
import Img3 from "../../assets/svg/kaitech.svg"
import Img4 from "../../assets/image/kaitech2.jpg"
import Img5 from "../../assets/image/img.png"
import Img6 from "../../assets/svg/kaitech1.png"
import Img7 from "../../assets/svg/kaitech3.png"
import Img8 from "../../assets/svg/kaitech4.png"


export const LatestNews: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const [titleActive, setTitleActive] = useState(false);
    const [textActive, setTextActive] = useState(true);
    const [setIndex, setSetIndex] = useState(0);
    const [textTransition, setTextTransition] = useState(true);

    const dataSets = [
        {
            images: [Img1, Img2, Img3, Img4, Img5],
            text: (
                <>
                    Наша команда заняла второе место на хакатоне <b>“StartUp Nation”</b>{" "}
                    с проектом <b>“Unikurs.kg”</b>, помогающий будущим абитуриентам со сдачей ОРТ.
                </>
            ),
        },
        {
            images: [Img6, Img7, Img8, Img3, Img5],
            text: (
                <>
                    Отличная новость! В <b>Kaitech</b> вводится новая традиция. Теперь **каждый месяц** будут проводиться встречи со спикерами и экспертами из IT-индустрии. Это прекрасный шанс для студентов получить уникальные знания и расширить свой нетворкинг!
                </>
            ),
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextTransition(false);
            setTimeout(() => {
                setSetIndex((prev) => (prev + 1) % dataSets.length);
                setTextTransition(true);
            }, 1000);
        }, 8000);

        return () => clearInterval(interval);
    }, [dataSets.length]); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setTitleActive(true),
            { threshold: 0.25 }
        );

        const observerText = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setTextActive(true),
            { threshold: 0.25 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        if (textRef.current) observerText.observe(textRef.current);

        return () => {
             if (titleRef.current) observer.unobserve(titleRef.current);
             if (textRef.current) observerText.unobserve(textRef.current);
        };
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
                    grabCursor
                    loop
                    autoplay={{
                        delay: 1000, 
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    modules={[Autoplay]}
                    className={styles.mySwiper}
                    centeredSlides
                >
                    {dataSets[setIndex].images.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            className={`${styles.slide} ${textTransition ? styles.slideIn : styles.slideOut
                                }`}
                        >
                            <img src={img} alt={`Slide ${index + 1}`} loading="lazy" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div
                    ref={textRef}
                    className={`${styles.textBlock} ${textActive ? styles.active : ""} ${textTransition ? styles.fadeIn : styles.fadeOut
                        }`}
                >
                    <p>{dataSets[setIndex].text}</p>
                </div>
            </div>
        </div>
    );
};