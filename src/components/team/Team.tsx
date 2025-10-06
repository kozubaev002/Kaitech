import React, {useEffect, useRef} from "react";
import styles from "./Team.module.scss";
import img2 from "../../assets/image/imageAgai.png";
import me from "../../assets/image/It is me.jpg";
import img from "../../assets/image/Nurzada.jpg";
import CholponbekEsenbekov from "../../assets/image/Cholponbek Esenbekov.jpg";

const placeholder =
    "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png";

const teamMembers = [
    {id: 1, name: "Cholponbek Esenbekov", role: "Founder", photo: CholponbekEsenbekov},
    {id: 2, name: "Nursultan Ulan uulu", role: "Director", photo: img2},
    {id: 3, name: "Nurzada Tobokelova", role: "Project manager", photo: img},
    {id: 4, name: "", role: "", photo: ""},
    {id: 5, name: "Kozubaev Jumaniyaz", role: "Frontend developer", photo: me},
];

export const Team: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = section?.querySelectorAll(`.${styles.memberCard}`);
        const textElements = section?.querySelectorAll(
            `.${styles.description}, .${styles.joinButton}, .${styles.title}` // title кошулду
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(cards || []).indexOf(entry.target);
                        entry.target.classList.add(styles.visible);
                        (entry.target as HTMLElement).style.transitionDelay =
                            index >= 0 ? `${index * 0.2}s` : "0.5s"; // title үчүн 0.5s жакшы
                    }
                });
            },
            {threshold: 0.2}
        );

        cards?.forEach((card) => observer.observe(card));
        textElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.teamSection} aria-label="Наша команда">
            <div className="container" ref={sectionRef}>
                <h2 className={styles.title}>Наша команда</h2>

                <div className={styles.members}>
                    {teamMembers.map((member) => (
                        <article key={member.id} className={styles.memberCard}>
                            <img
                                src={member.photo || placeholder}
                                alt={
                                    member.name
                                        ? `${member.name} - ${member.role}`
                                        : "Фото сотрудника"
                                }
                                className={styles.photo}
                                loading="lazy"
                            />
                            <h3 className={styles.name}>{member.name || "Имя Фамилия"}</h3>
                            <p className={styles.role}>{member.role || "Менеджер"}</p>
                        </article>
                    ))}
                </div>

                <p className={styles.description}>
                    Присоединяйтесь к нашему профессиональному сообществу, где ценятся
                    развитие и обучение. Мы предлагаем стажировки и поддержку в
                    трудоустройстве, уже помогли десяткам людей построить успешную карьеру
                    с KaiTech - теперь очередь за вами.
                </p>

                <a href="https://instagram.com/kaitech_it" aria-label="Instagram">
                    <button
                        type="button"
                        className={styles.joinButton}
                        aria-label="Присоединиться к команде KaiTech"
                    >
                        Присоединиться
                    </button>
                </a>
            </div>
        </section>
    );
};
