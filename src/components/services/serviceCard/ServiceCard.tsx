import React from "react";
import styles from "./ServiceCard.module.scss";

interface Props {
    icon: string;
    title: string;
    description: string;
}

export const ServiceCard: React.FC<Props> = ({ icon, title, description }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <img src={icon} alt={title} className={styles.icon}/>
            <p className={styles.description}>{description}</p>
        </div>
    );
};