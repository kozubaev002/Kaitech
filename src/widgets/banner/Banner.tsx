import React from 'react';
import styles from './Banner.module.scss';

const Banner: React.FC = () => {
    return (
        <section className={styles.banner} aria-label="Баннер студенттер үчүн">
            <div className={styles.cloudBox}></div>
        </section>
    );
};

export default Banner;