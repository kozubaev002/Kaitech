import React from "react";
import styles from "./ProjectsSection.module.scss";
import leftImg from "../../assets/svg/leftImg.svg";
import rightImg from "../../assets/svg/right.svg";

export const ProjectsSection: React.FC = () => {
    return (
        <section 
            className={styles.projectsSection} 
            aria-labelledby="projects-title" 
            itemScope 
            itemType="https://schema.org/CreativeWork"
        >
            <img
                className={styles.leftImg}
                src={leftImg}
                alt="Счастливый клиент KaiTech слева"
                itemProp="image"
            />

            <div className={styles.containerr}>
                <h2 id="projects-title" className={styles.title} itemProp="headline">
                    100+ реализованных проектов и довольных клиентов
                </h2>
                <p className={styles.description} itemProp="description">
                    Мы KaiTech разрабатываем ПО для автоматизации малых и средних предприятий.
                    <br />
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
            />
        </section>
    );
};
