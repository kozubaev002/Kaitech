import React, { useState, useRef, useEffect } from "react";
import styles from "./CompanyKgz.module.scss";
import ctechnology from "../../assets/image/ctechnology.png";
import bakaibank from "../../assets/image/bakaibank.png";
import mbank from "../../assets/image/mbank.png";
import demirbank from "../../assets/image/demirbank.png";
import beeline from "../../assets/image/beeline.png";
import aisoft from "../../assets/image/aisoft.png"
import Epam from "../../assets/image/epam.png"
import eqs from "../../assets/image/eqsGroup.png"
import technology from "../../assets/image/technology.png"
import Untitled from "../../assets/image/Untitled.png"

const companies = [
    { img: ctechnology, name: "Ctechnology" },
    { img: bakaibank, name: "Bakai Bank" },
    { img: mbank, name: "MBank" },
    { img: demirbank, name: "Demir Bank" },
    { img: beeline, name: "Beeline" },
    { img: aisoft, name: "Aisoft" },
    { img: Epam, name: "Epam" },
    { img: eqs, name: "Eqs" },
    { img: technology, name: "Technology" },
    { img: Untitled, name: "Untitled" },
];


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
                        {companies.concat(companies).map((company, idx) => (
                            <div key={idx} className={styles.logoBox}>
                                <img src={company.img} alt={`${company.name} logo`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyKgz;
