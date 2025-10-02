import React, {useEffect, useRef, useState} from "react";
import styles from "./Services.module.scss";
import {ServiceCard} from "../serviceCard/ServiceCard";
import Icon1 from "../../../assets/svg/services1.svg";
import Icon2 from "../../../assets/svg/services2.svg";
import Icon3 from "../../../assets/svg/services3.svg";
import Icon4 from "../../../assets/svg/services4.svg";

const services = [
    {
        id: 1,
        title: "Консалтинг",
        icon: Icon1,
        description: "Мы оказываем экспертную поддержку в оптимизации IT-инфраструктуры и бизнес-процессов."
    },
    {
        id: 2,
        title: "Разработка ПО",
        icon: Icon2,
        description: "Создаем индивидуальные программные решения для автоматизации бизнеса."
    },
    {
        id: 3,
        title: "Аутсорсинг",
        icon: Icon3,
        description: "Мы берем на себя поддержку, обслуживание и развитие вашей IT-инфраструктуры."
    },
    {
        id: 4,
        title: "Аутстаффинг",
        icon: Icon4,
        description: "Мы предоставим квалифицированных IT-специалистов для работы над вашими проектами."
    },
];

export const Services: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const [isVisibleTitle, setIsVisibleTitle] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisibleTitle(true);
                    setVisibleCards(services.map(s => s.id));
                    observer.disconnect();
                }
            },
            {threshold: 0.3}
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <div className="container">
            <section
                className={styles.servicesSection}
                aria-labelledby="services-title"
            >
                <div className={styles.servicesContainer}>
                    <h2
                        id="services-title"
                        className={`${styles.title} ${isVisibleTitle ? styles.visibleTitle : ""}`}
                    >
                        Что мы предоставляем?
                    </h2>
                    <div ref={sectionRef} className={styles.cardsWrapper}>
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                style={{
                                    transitionDelay: visibleCards.includes(service.id) ? `${index * 0.2}s` : "0s",
                                }}
                                isVisible={visibleCards.includes(service.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
