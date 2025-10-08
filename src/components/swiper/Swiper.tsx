import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./Swiper.module.scss";
import SafeClinic from "../../assets/image/Safe Clinik.png";
import SportHub from "../../assets/image/SportHub.png";
import CicleZone from "../../assets/image/CicleZone.png";
import CRM from "../../assets/image/CRM.webp";
import Avenir from "../../assets/image/Avenir.png";
import NSR from "../../assets/image/NSR.png";

const images = [SafeClinic, SportHub, CicleZone, CRM, Avenir, NSR];

const texts = [
    "SafeClinic — это платформа для безопасного онлайн-консультирования и записи к врачам, обеспечивающая быстрый доступ к медицинской помощи.",
    "SportHub — это приложение для любителей спорта, где можно отслеживать тренировки, записываться на спортивные мероприятия и общаться с единомышленниками.",
    "CicleZone — это современный магазин велосипедов и аксессуаров, где можно выбрать качественный велосипед, запчасти и экипировку для активного образа жизни.",
    "CRM — система управления бизнесом и клиентами, которая помогает автоматизировать процессы, контролировать продажи и повышать эффективность команды.",
    "Avenir — проект, посвящённый инновациям и новым технологиям будущего, включая AI, IoT и умные решения для бизнеса и города.",
    "NSR — энергетические и IT проекты, направленные на устойчивое развитие, оптимизацию ресурсов и внедрение передовых технологий."
];

const SwiperDemo: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const swiperWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements = [titleRef, swiperWrapperRef];
        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observerInstance.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        elements.forEach(el => {
            if (el.current) observer.observe(el.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container">
            <section className={styles.swiperContainer} aria-label="Наши проекты">
                <h2 ref={titleRef} className={styles.title}>Наши проекты</h2>

                <div ref={swiperWrapperRef} className={styles.swiperWrapper}>
                    <Swiper
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        slidesPerView={1.6}
                        spaceBetween={20}
                        centeredSlides
                        loop
                        speed={1500}
                    >
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div className={styles.slide}>
                                    <img src={img} alt={`Project ${idx + 1}`} />
                                    <div className={styles.overlayText}>
                                        <p>{texts[idx]}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default SwiperDemo;
