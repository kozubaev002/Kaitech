import React from "react";
import styles from "./CompanyKgz.module.scss";
import ctechnology from "../../assets/image/ctechnology.png";
import bakaibank from "../../assets/image/bakaibank.png";
import mbank from "../../assets/image/mbank.png";
import demirbank from "../../assets/image/demirbank.png";
import beeline from "../../assets/image/beeline.png";

const CompanyKgz: React.FC = () => {
    return (
        <div className="container">
            <section className={styles.companiesSection} aria-label="Наши успешные стажеры">
                <h2><span>Наши успешные стажеры</span> работают в топовых компаниях Кыргызстана</h2>
                <div className={styles.companies}>
                    <img src={ctechnology} alt="CTechnology" />
                    <img src={bakaibank} alt="Bakai Bank" />
                    <img src={mbank} alt="Mbank" />
                    <img src={demirbank} alt="Demir Bank" />
                    <img src={beeline} alt="Beeline" />
                </div>
            </section>
        </div>
    );
};

export default CompanyKgz;
