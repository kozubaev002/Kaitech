import React, { useState, useRef, useEffect } from "react";
import styles from "./ContactForm.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const formRef = useRef<HTMLDivElement>(null);
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

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Имя: ${name}%0AТелефон: ${phone}%0AСообщение: ${message}`;
        window.open(`https://t.me/+996706247507?text=${text}`, "_blank");

        setName("");
        setPhone("");
        setMessage("");
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyLetters = e.target.value.replace(/[^а-яА-Яa-zA-Z\s]/g, "");
        setName(onlyLetters);
    };

    return (
        <div className="container">
            <section
                className={`${styles.contactSection} ${visible ? styles.visible : ""}`}
                ref={formRef}
            >
                <div className={styles.info}>
                    <p className={styles.title}>Оставьте данные и мы свяжемся с Вами</p>
                    <ul className={styles.list}>
                        <li>Проанализируем бизнес-процессы</li>
                        <li>Настроим и автоматизируем</li>
                        <li>Подключим необходимые интеграции</li>
                        <li>Тех поддержка</li>
                    </ul>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 className={styles.formTitle}>Связаться с нами</h2>

                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                        placeholder="Ваше имя"
                        aria-label="Ваше имя"
                    />

                    <PhoneInput
                        country={""}
                        value={phone}
                        onChange={setPhone}
                        enableSearch={true}
                        inputProps={{
                            name: "phone",
                            required: true,
                        }}
                        placeholder="Номер телефона"
                        containerClass={styles.phoneContainer}
                        inputClass={styles.phoneInput}
                    />

                    <textarea
                        value={message}
                        onChange={(e) => {
                            const words = e.target.value.trim().split(/\s+/).filter(Boolean);
                            if (words.length <= 300) setMessage(e.target.value);
                        }}
                        required
                        placeholder="Ваше сообщение"
                        aria-label="Ваше сообщение"
                    />

                    <p style={{ fontSize: "0.9rem", color: "#555" }}>
                        Слов: {message.trim().split(/\s+/).filter(Boolean).length}/300
                    </p>

                    <button aria-label="Отправить" type="submit">Отправить</button>
                </form>
            </section>
        </div>
    );
};

export default ContactForm;
