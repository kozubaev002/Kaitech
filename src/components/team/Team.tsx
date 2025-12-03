// import React, { useEffect, useRef } from "react";
// import styles from "./Team.module.scss";
// import { GoChevronLeft } from "react-icons/go";
// import { GoChevronRight } from "react-icons/go";
// import CholponbekEsenbekov from "../../assets/image/Cholponbek Esenbekov.jpg";
// import Agai from "../../assets/image/Agai.png"
// import Bratan from "../../assets/image/Bratan.png"
// import Jumaniyaz from "../../assets/svg/Jumaniyaz.png"
// import Elmira from "../../assets/image/Elmira.png"
// import Islam from "../../assets/svg/Islam.png"
// import Aziret from "../../assets/image/Aziret.png"
// import Arlen from "../../assets/image/Arlen.png"
// import Alima from "../../assets/image/Alima.png"
// import Sary from "../../assets/image/Sary.png"
// import Doni from "../../assets/image/Doni.png"

// const placeholder =
//     "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png";

// const teamMembers = [
//     { id: 1, name: "Cholponbek Esenbekov", role: "Founder", photo: CholponbekEsenbekov },
//     { id: 2, name: "Nursultan Ulan uulu", role: "Director", photo: Agai },
//     { id: 3, name: "Aiba Bratan", role: "Project manager", photo: Bratan },
//     { id: 6, name: "Islam Kaseiinov", role: "Backend developer", photo: Islam },
//     { id: 5, name: "Kozubaev Jumaniyaz", role: "Frontend developer", photo: Jumaniyaz },
//     { id: 7, name: "Aziret Abdyshov", role: "Backend developer", photo: Aziret },
//     { id: 4, name: "Elmira Sattorova", role: "Frontend developer", photo: Elmira },
//     { id: 8, name: "Arlen Karybaev", role: "Backend developer", photo: Arlen },
//     { id: 9, name: "Alima ", role: "UX/UI designer", photo: Alima },
//     { id: 10, name: "Saridin Tologon Uulu", role: "Frontend developer", photo: Sary },
//     { id: 11, name: "Daniel Maseitov", role: "Frontend developer", photo: Doni },
// ];

// export const Team: React.FC = () => {
//     const sectionRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         const section = sectionRef.current;
//         const cards = section?.querySelectorAll(`.${styles.memberCard}`);
//         const textElements = section?.querySelectorAll(
//             `.${styles.description}, .${styles.joinButton}, .${styles.title}`
//         );

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         const index = Array.from(cards || []).indexOf(entry.target);
//                         entry.target.classList.add(styles.visible);
//                         (entry.target as HTMLElement).style.transitionDelay =
//                             index >= 0 ? `${index * 0.2}s` : "0.5s";
//                     }
//                 });
//             },
//             { threshold: 0.2 }
//         );

//         cards?.forEach((card) => observer.observe(card));
//         textElements?.forEach((el) => observer.observe(el));

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section className={styles.teamSection} aria-label="Наша команда">
//             <div className="container" ref={sectionRef}>
//                 <h2 className={styles.title}>Наша команда</h2>

//                 <div style={{display:"flex"}}>
//                     <GoChevronLeft size={50} />
//                     <div className={styles.members}>
//                         {teamMembers.map((member) => (
//                             <article
//                                 key={member.id}
//                                 className={styles.memberCard}
//                                 aria-label={`${member.name} — ${member.role}`}
//                             >
//                                 <img
//                                     src={member.photo || placeholder}
//                                     alt={
//                                         member.name
//                                             ? `${member.name} - ${member.role}`
//                                             : "Фото сотрудника"
//                                     }
//                                     className={styles.photo}
//                                     loading="lazy"
//                                     title={`${member.name} — ${member.role}`}
//                                 />
//                                 <h3 className={styles.name}>{member.name || "Имя Фамилия"}</h3>
//                                 <p className={styles.role}>{member.role || "Менеджер"}</p>
//                             </article>
//                         ))}
//                     </div>
//                     <GoChevronRight size={50} />
//                 </div>

//                 <p className={styles.description}>
//                     Присоединяйтесь к нашему профессиональному сообществу, где ценятся
//                     развитие и обучение. Мы предлагаем стажировки и поддержку в
//                     трудоустройстве, уже помогли десяткам людей построить успешную карьеру
//                     с KaiTech - теперь очередь за вами.
//                 </p>

//                 <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://instagram.com/kaitech_it"
//                     aria-label="Instagram KaiTech">
//                     <button
//                         type="button"
//                         className={styles.joinButton}
//                         aria-label="Присоединиться к команде KaiTech"
//                     >
//                         Подробнее
//                     </button>
//                 </a>
//             </div>
//         </section>
//     );
// };
import React, { useState, useEffect } from "react";
import styles from "./Team.module.scss";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import CholponbekEsenbekov from "../../assets/image/Cholponbek Esenbekov.jpg";
import Agai from "../../assets/image/Agai.png";
import Bratan from "../../assets/image/Bratan.png";
import Jumaniyaz from "../../assets/svg/Jumaniyaz.png";
import Elmira from "../../assets/image/Elmira.png";
import Islam from "../../assets/svg/Islam.png";
import Aziret from "../../assets/image/Aziret.png";
import Arlen from "../../assets/image/Arlen.png";
import Alima from "../../assets/image/Alima.png";
import Sary from "../../assets/image/Sary.png";
import Doni from "../../assets/image/Doni.png";
import Abir from "../../assets/image/Abir.png";

const baseMembers = [
    { id: 1, name: "Cholponbek Esenbekov", role: "Founder", photo: CholponbekEsenbekov },
    { id: 2, name: "Nursultan Ulan uulu", role: "Director", photo: Agai },
    { id: 3, name: "Aibarchyn Kadyrbaeva", role: "Project manager", photo: Bratan },
    { id: 4, name: "Elmira Sattorova", role: "Frontend developer", photo: Elmira },
    { id: 5, name: "Kozubaev Jumaniyaz", role: "Frontend developer", photo: Jumaniyaz },
    { id: 6, name: "Islam Kaseiinov", role: "Backend developer", photo: Islam },
    { id: 7, name: "Aziret Abdyshov", role: "Backend developer", photo: Aziret },
    { id: 8, name: "Arlen Karybaev", role: "Backend developer", photo: Arlen },
    { id: 9, name: "Alima", role: "UX/UI designer", photo: Alima },
    { id: 10, name: "Saridin Tologon Uulu", role: "Frontend developer", photo: Sary },
    { id: 11, name: "Daniel Maseitov", role: "Frontend developer", photo: Doni },
    { id: 12, name: "Abiyir Kanybekov", role: "Frontend developer", photo: Abir },
];

// ❗ УМНОЖАЕМ массив × 100, чтобы он был реально бесконечный
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

