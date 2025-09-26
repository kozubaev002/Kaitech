import React from "react";
import styles from "./Header.module.scss";
import kaitech from "../../assets/image/headerKaitech.png";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={kaitech} alt="KaiTech логотипи" />
                    <h1>KaiTech</h1>
                </div>

                <nav className={styles.nav}>
                    <ul>
                        <li>О нас</li>
                        <li>Наши услуги</li>
                        <li>Проекты</li>
                        <li>Карьера</li>
                    </ul>
                </nav>
                <button type="button">Связаться с нами</button>
            </div>

        </header>
    );
};

export default Header;
