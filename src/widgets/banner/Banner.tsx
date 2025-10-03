import React from 'react';
import styles from './Banner.module.scss';
import img from "../../assets/svg/kaitech.svg"
import img2 from "../../assets/image/2025.jpg"
const Banner: React.FC = () => {
    return (
        <section className={styles.banner} aria-label="Баннер студенттер үчүн">
            <div className={styles.cloudBox}></div>
            <img src={img2} alt="" />
        </section>
    );
};

export default Banner;