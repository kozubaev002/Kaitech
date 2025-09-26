import React from 'react';
import styles from './Banner.module.scss';
import imageStudents from "../../assets/image/imageStudents.png";

const Banner: React.FC = () => {
  return (
    <section className={styles.banner} aria-label="Баннер студенттер үчүн">
      <img src={imageStudents} alt="Студенттер баннер сүрөтү" />
    </section>
  );
};

export default Banner;
