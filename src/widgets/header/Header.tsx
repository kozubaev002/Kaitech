import React from "react";
import styles from "./Header.module.scss";
import kaitech from "../../assets/image/headerKaitech.png";

const Header: React.FC = () => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }; 

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={kaitech} alt="KaiTech логотипи" loading="lazy" />
                    <h1>KaiTech</h1>
                </div>

                <nav className={styles.nav}>
                    <ul>
                        <li onClick={() => scrollToSection("banner")}>О нас</li>
                        <li onClick={() => scrollToSection("services")}>Наши услуги</li>
                        <li onClick={() => scrollToSection("swiper")}>Проекты</li>
                        <li onClick={() => scrollToSection("team")}>Карьера</li>
                    </ul>
                </nav>

                <button onClick={() => scrollToSection("contact")} type="button">Связаться с нами</button>
            </div>

        </header>
    );
};

export default Header;
