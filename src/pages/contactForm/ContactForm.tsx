import React, { useState } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = { name, phone, message };

        console.log("Форма жөнөтүлдү:", formData);

        setName("");
        setPhone("");
        setMessage("");
    };
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyLetters = e.target.value.replace(/[^а-яА-Яa-zA-Z\s]/g, "");
        setName(onlyLetters);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let digits = e.target.value.replace(/\D/g, "");
        if (digits.startsWith("996")) digits = digits.slice(3);
        if (digits.length > 9) digits = digits.slice(0, 9);

        let formatted = "+996 ";
        if (digits.length > 0) formatted += "(" + digits.slice(0, Math.min(3, digits.length));
        if (digits.length >= 4) formatted += ")-" + digits.slice(3, 6);
        if (digits.length >= 7) formatted += "-" + digits.slice(6, 9);

        setPhone(formatted);
    };

    return (
        <div className="container">
            <section className={styles.contactSection} aria-label="Форма для связи с компанией KaiTech">
                <div className={styles.info}>
                    <p className={styles.title}>Оставьте данные и мы свяжемся с Вами</p>
                    <ul className={styles.list}>
                        <li>Проанализируем бизнес-процессы</li>
                        <li>Настроим и автоматизируем</li>
                        <li>Подключим необходимые интеграции</li>
                        <li>Тех поддержка</li>
                    </ul>
                    <p className={styles.chatsTitle}>Наши чаты</p>
                    <p className={styles.chatsInfo}>
                        Вы можете также отправлять сообщения в наши мессенджеры
                    </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 className={styles.formTitle}>Связаться с нами</h2>

                    <p className={styles.p}>
                        Напишите любой интересующий вопрос, и наши менеджеры вам ответят как можно скорее.
                    </p>

                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                        placeholder={"Ваше имя"}
                    />

                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        placeholder={"+996 (___)-___-___"}
                        pattern="\+996\s\(\d{3}\)-\d{3}-\d{3}"
                    />

                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder={"Ваше сообщение"}
                    />

                    <button type="submit" aria-label="Отправить форму обратной связи">
                        Отправить
                    </button>

                </form>
            </section>
        </div>

    );
};

export default ContactForm;