import React, { useState, useEffect } from "react";
import styles from "./Team.module.scss";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import CholponbekEsenbekov from "../../assets/image/Cholponbek Esenbekov.jpg";
import Agai from "../../assets/image/Agai.png";
import Bratan from "../../assets/image/Bratan.png";
import Elmira from "../../assets/image/Elmira.png";
import Islam from "../../assets/svg/Islam.png";
import Aziret from "../../assets/image/Aziret.png";
import Arlen from "../../assets/image/Arlen.png";
import Alima from "../../assets/image/Alima.png";
import Sary from "../../assets/image/Sary.png";
import Doni from "../../assets/image/Doni.png";
import Abir from "../../assets/image/abir2.png";

const baseMembers = [
    { id: 1, name: "Cholponbek Esenbekov", role: "Founder", photo: CholponbekEsenbekov },
    { id: 2, name: "Nursultan Ulan uulu", role: "Director", photo: Agai },
    { id: 3, name: "Aibarchyn Kadyrbaeva", role: "Project manager", photo: Bratan },
    { id: 4, name: "Elmira Sattorova", role: "Frontend developer", photo: Elmira },
    { id: 6, name: "Islam Kaseiinov", role: "Backend developer", photo: Islam },
    { id: 7, name: "Aziret Abdyshov", role: "Backend developer", photo: Aziret },
    { id: 8, name: "Arlen Karybaev", role: "Backend developer", photo: Arlen },
    { id: 9, name: "Alima", role: "UX/UI designer", photo: Alima },
    { id: 10, name: "Saridin Tologon Uulu", role: "Frontend developer", photo: Sary },
    { id: 11, name: "Daniel Maseitov", role: "Frontend developer", photo: Doni },
    { id: 12, name: "Abiyir Kanybekov", role: "Frontend developer", photo: Abir },
];

const infiniteList = Array(100).fill(baseMembers).flat();

export const Team = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [step, setStep] = useState(4);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;

            if (w <= 380) {
                setVisibleCount(2);
                setStep(2);
            } else if (w <= 676) {
                setVisibleCount(3);
                setStep(3);
            } else if (w <= 1024) {
                setVisibleCount(3);
                setStep(3);
            } else {
                setVisibleCount(4);
                setStep(4);
            }
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const nextSlide = () => {
        setIndex((prev) => prev + step);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - step < 0 ? 0 : prev - step));
    };

    return (
        <section className={styles.teamSection}>
            <div className="container">
                <h2 className={styles.title}>Наша команда</h2>

                <div className={styles.carouselWrapper}>
                    <GoChevronLeft className={styles.arrow} size={40} onClick={prevSlide} />

                    <div className={styles.carousel}>
                        <div
                            className={styles.carouselTrack}
                            style={{
                                transform: `translateX(-${(index * 100) / visibleCount}%)`,
                                transition: "transform 0.6s ease"
                            }}
                        >
                            {infiniteList.map((member, i) => (
                                <div key={i} className={styles.memberCard}>
                                    <img src={member.photo} className={styles.photo} />
                                    <h3 className={styles.name}>{member.name}</h3>
                                    <p className={styles.role}>{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <GoChevronRight className={styles.arrow} size={40} onClick={nextSlide} />
                </div>
            </div>
        </section>
    );
};