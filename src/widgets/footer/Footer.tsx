import React from "react";
import styles from "./Footer.module.scss";
import kaitech from "../../assets/image/kaitech-logo.png";
import whatsapp from "../../assets/svg/whatsapp.svg";
import telegram from "../../assets/svg/telegram.svg";
import instagram from "../../assets/svg/instagram.svg";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={kaitech} alt="KaiTech логотипи" />
            <span>KaiTech</span>
          </div>

          <div className={styles.social}>
            <a style={{ width: "50px", height: "50px" }} href="https://wa.me/996700113095" aria-label="WhatsApp">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a style={{ width: "48px", height: "48px" }} href="https://t.me/jdsissshx" aria-label="Telegram">
              <img src={telegram} alt="Telegram" />
            </a>
            <a style={{ width: "40px", height: "40px" }} href="https://instagram.com/kaitech_it" aria-label="Instagram">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>

        </div>

        <nav className={styles.nav}>
          <h2>Информация</h2>
          <ul>
            <li onClick={() => scrollToSection("banner")}>О нас</li>
            <li onClick={() => scrollToSection("swiper")}>Наши проекты</li>
            <li onClick={() => scrollToSection("services")}>Услуги</li>
          </ul>
        </nav>

        <div className={styles.contacts}>
          <h2>Контакты</h2>
          <div>
            <h3>Кыргызская Республика, 720000 г. Бишкек, ул. Мусы Джалиля 192</h3>
            <p>  Телефон: +996 (700) 113 095</p>
          </div>
        </div>

        <div className={styles.adaptivka}>
          <nav className={styles.nav2}>
            <h2>Информация</h2>
            <ul>
              <li>О нас</li>
              <li>Наши проекты</li>
              <li>Услуги</li>
            </ul>
          </nav>

          <div className={styles.contacts2}>
            <h2>Контакты</h2>
            <div>
              <h3>Кыргызская Республика, 720000 г. Бишкек, ул. Мусы Джалиля 192</h3>
              <p>  Телефон: +996 (700) 113 095</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;