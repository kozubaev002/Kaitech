import React, { useEffect, useState } from 'react';
import styles from './Banner.module.scss';
import img1 from "../../assets/image/2025.jpg";
import img2 from "../../assets/svg/kaitech.svg";
import img3 from "../../assets/image/100000.jpg";
import img4 from "../../assets/image/kaitech2.jpg";

const images = [img1, img2, img3, img4];

const Banner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setActiveIndex(0), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev! + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className={styles.banner}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.image} ${index === activeIndex ? styles.active : ''}`}
        >
          <img src={img} alt={`banner ${index + 1}`} />
        </div>
      ))}
      <div className={styles.cloudBox}></div>
    </section>
  );
};

export default Banner;
