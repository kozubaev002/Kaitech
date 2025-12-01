import React from "react";
import styles from "./ServiceCard.module.scss";

interface Props {
    icon: string;
    title: string;
    description: string;
    isVisible?: boolean;
    style?: React.CSSProperties;
}

export const ServiceCard: React.FC<Props> = ({ icon, title, description, isVisible, style }) => {
    return (
        <div
            className={`${styles.card} ${isVisible ? styles.visibleCard : ""}`}
            style={style}
            role="article"
            aria-label={title}
            itemScope
            itemType="https://schema.org/Service"
        >
            <h3 className={styles.title} itemProp="name">{title}</h3>
            <img src={icon} alt={title} className={styles.icon} itemProp="image" />
            <p className={styles.description} itemProp="description">{description}</p>
        </div>
    );
};
