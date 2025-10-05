import React from "react";
import styles from "./MapLocation.module.scss";

export const MapLocation: React.FC = () => {
    return (
        <div className="container">
            <h2 className={styles.title}>Наше местоположение</h2>
            <div className={styles.mapContainer}>
                <iframe
                    title="Карты местоположения KaiTech"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.799678581931!2d74.63910837646312!3d42.88607517116337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb774e24c33c5%3A0x74249db055aae55d!2s192%20%D0%9C%D1%83%D1%81%D1%8B%20%D0%94%D0%B6%D0%B0%D0%BB%D0%B8%D0%BB%D1%8F%2C%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA!5e0!3m2!1sru!2skg!4v1727609999999!5m2!1sru!2skg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};
