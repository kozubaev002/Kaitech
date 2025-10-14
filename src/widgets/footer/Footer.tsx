import React, { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.scss";
import kaitech from "../../assets/image/kaitech-logo.png";
import whatsapp from "../../assets/svg/whatsapp.svg";
import telegram from "../../assets/svg/telegram.svg";
import instagram from "../../assets/svg/instagram.svg";

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div
        ref={containerRef}
        className={`${styles.container} ${isVisible ? styles.animate : ""}`}
      >
        <div className={`${styles.brand} ${isVisible ? styles.animate : ""}`}>
          <div className={styles.logo}>
            <img src={kaitech} alt="KaiTech логотипи" loading="lazy" />
            <span>KaiTech</span>
          </div>
          <div className={styles.social}>
            <a
              style={{ width: "50px", height: "50px" }}
              href="https://wa.me/996502102270"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <img src={whatsapp} alt="WhatsApp" loading="lazy" />
            </a>

            <a
              style={{ width: "48px", height: "48px" }}
              href="https://t.me/Nur6ultan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <img src={telegram} alt="Telegram" loading="lazy" />
            </a>

            <a
              style={{ width: "48px", height: "48px" }}
              href="https://instagram.com/kaitech_it"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagram} alt="Instagram" loading="lazy" />
            </a>

          </div>
        </div>

        <nav className={`${styles.nav} ${isVisible ? styles.animate : ""}`}>
          <h2>Информация</h2>
          <ul>
            <li onClick={() => scrollToSection("banner")}>О нас</li>
            <li onClick={() => scrollToSection("swiper")}>Наши проекты</li>
            <li onClick={() => scrollToSection("services")}>Услуги</li>
          </ul>
        </nav>

        <div className={`${styles.contacts} ${isVisible ? styles.animate : ""}`}>
          <h2>Контакты</h2>
          <div>
            <h3>
              <a
                href="https://2gis.kg/bishkek/search/Кыргызская%20Республика,%20720000%20г.%20Бишкек,%20ул.%20Мусы%20Джалиля%20192"
                target="_blank"
                rel="noopener noreferrer"
              >
                Кыргызская Республика, 720000 г. Бишкек, ул. Мусы Джалиля 192
              </a>
            </h3>
            <span> +996 (502) 102 270</span>
          </div>
        </div>

        <div className={styles.adaptivka}>
          <nav className={`${styles.nav2} ${isVisible ? styles.animate : ""}`}>
            <h2>Информация</h2>
            <ul>
              <li>О нас</li>
              <li>Наши проекты</li>
              <li>Услуги</li>
            </ul>
          </nav>

          <div className={`${styles.contacts2} ${isVisible ? styles.animate : ""}`}>
            <h2>Контакты</h2>
            <div>
              <h3>
                <a
                  href="https://2gis.kg/bishkek/search/Кыргызская%20Республика,%20720000%20г.%20Бишкек,%20ул.%20Мусы%20Джалиля%20192"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Кыргызская Республика, 720000 г. Бишкек, ул. Мусы Джалиля 192
                </a>
              </h3>
              <span> +996 (700) 113 095</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
