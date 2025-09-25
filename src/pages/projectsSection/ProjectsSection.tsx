import React from "react";
import styles from "./ProjectsSection.module.scss";
import leftImg from "../../assets/svg/leftImg.svg";
import rightImg from "../../assets/svg/right.svg";

export const ProjectsSection: React.FC = () => {
    return (
        <section className={styles.projectsSection} aria-label="Реализованные проекты и довольные клиенты">
            <img
                className={styles.leftImg}
                src={leftImg}
                alt="Счастливый клиент слева"
                loading="lazy"
            />
            <div className={styles.container}>
                <h2 className={styles.title}>
                    100+ реализованных проектов и довольных клиентов
                </h2>
                <p className={styles.description}>
                    Мы KaiTech разрабатываем ПО для автоматизации малых и средних предприятий.
                    <br />
                    Наши продукты помогают ведущим компаниям, а креативные стартапы — важная часть нашей работы.
                </p>
                <button className={styles.btn} aria-label="Подробнее о проектах">
                    Подробнее
                </button>
            </div>
            <img
                className={styles.rightImg}
                src={rightImg}
                alt="Счастливый клиент справа"
                loading="lazy"
            />
        </section>
    );
};
