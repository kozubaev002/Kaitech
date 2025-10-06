import React, {useEffect, useRef, useState} from "react";
import styles from "./ProjectsSection.module.scss";
import leftImg from "../../assets/svg/leftImg.svg";
import rightImg from "../../assets/svg/right.svg";

export const ProjectsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.3}
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${styles.projectsSection} ${isVisible ? styles.visible : ""}`}
            aria-labelledby="projects-title"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            <img
                className={styles.leftImg}
                src={leftImg}
                alt="Счастливый клиент KaiTech слева"
                itemProp="image"
                loading="lazy"
            />

            <div className={styles.containerr}>
                <h3 id="projects-title" className={styles.title} itemProp="headline">
                    100+ реализованных проектов и довольных клиентов
                </h3>
                <p className={styles.description} itemProp="description">
                    Мы KaiTech разрабатываем ПО для автоматизации малых и средних предприятий.
                    <br/>
                    Наши продукты помогают ведущим компаниям, а креативные стартапы — важная часть нашей работы.
                </p>
                <button
                    className={styles.btn}
                    aria-label="Подробнее о реализованных проектах KaiTech"
                >
                    Подробнее
                </button>
            </div>

            <img
                className={styles.rightImg}
                src={rightImg}
                alt="Счастливый клиент KaiTech справа"
                itemProp="image"
                loading="lazy"
            />
        </section>
    );
};
