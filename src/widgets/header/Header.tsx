import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import kaitech from "../../assets/image/headerKaitech.png";
import burger from "../../assets/svg/burger.svg";

const Header: React.FC = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                setShowHeader(true);
            } else if (currentScroll > lastScroll) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`${styles.header} ${!showHeader ? styles.hide : ""}`}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img
                        src={kaitech}
                        alt="Kaitech логотип"
                        title="Kaitech — образовательная платформа"
                        loading="lazy"
                    />
                    <h1>Kaitech</h1>
                </div>

                <nav className={styles.nav}>
                    <ul>
                        <li onClick={() => scrollToSection("banner")}>
                            <span title="О нас — раздел Kaitech">О нас</span>
                        </li>
                        <li onClick={() => scrollToSection("services")}>
                            <span title="Наши услуги — раздел Kaitech">Наши услуги</span>
                        </li>
                        <li onClick={() => scrollToSection("swiper")}>
                            <span title="Проекты — раздел Kaitech">Проекты</span>
                        </li>
                        <li onClick={() => scrollToSection("team")}>
                            <span title="Карьера — раздел Kaitech">Карьера</span>
                        </li>
                    </ul>
                </nav>

                <img
                    src={burger}
                    alt="Меню"
                    className={styles.burger}
                    onClick={() => setIsMenuOpen(true)}
                />

                <button
                    onClick={() => scrollToSection("contact")}
                    type="button"
                    title="Связаться с нами — раздел Kaitech"
                >
                    Связаться с нами
                </button>
            </div>

            {isMenuOpen && (
                <div className={styles.modalMenu}>
                    <div className={styles.modalContent}>
                        <nav className={styles.nav}>
                            <ul>
                                <li onClick={() => scrollToSection("banner")}>
                                    <span>О нас</span>
                                </li>
                                <li onClick={() => scrollToSection("services")}>
                                    <span>Наши услуги</span>
                                </li>
                                <li onClick={() => scrollToSection("swiper")}>
                                    <span>Проекты</span>
                                </li>
                                <li onClick={() => scrollToSection("team")}>
                                    <span>Карьера</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
