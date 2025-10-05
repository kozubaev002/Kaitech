import React, { useState, useRef, useEffect } from "react";
import styles from "./CompanyKgz.module.scss";
import ctechnology from "../../assets/image/ctechnology.png";
import bakaibank from "../../assets/image/bakaibank.png";
import mbank from "../../assets/image/mbank.png";
import demirbank from "../../assets/image/demirbank.png";
import beeline from "../../assets/image/beeline.png";

const images = [ctechnology, bakaibank, mbank, demirbank, beeline];

const CompanyKgz: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <section
        ref={sectionRef}
        className={`${styles.companiesSection} ${visible ? styles.visible : ""}`}
        aria-label="Наши успешные стажеры"
      >
        <h2>
          <span>Наши успешные стажеры</span> работают в топовых компаниях Кыргызстана
        </h2>

        <div
          className={styles.slider}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={styles.track}
            style={{ animationPlayState: paused ? "paused" : "running" }}
          >
            {images.concat(images).map((img, idx) => (
              <div key={idx} className={styles.logoBox}>
                <img src={img} alt={`Company ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyKgz;
