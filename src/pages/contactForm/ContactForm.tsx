import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
        const onlyLetters = e.target.value.replace(/[^а-яА-Яa-zA-Z\\s]/g, "");
        setName(onlyLetters);
    };

    return (
        <div className="container">
            <section
                className={styles.contactSection}
                aria-label="Форма для связи с компанией KaiTech"
            >
                <div className={styles.info}>
                    <p className={styles.title}>
                        Оставьте данные и мы свяжемся с Вами
                    </p>
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
                    />

                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder="Ваше сообщение"
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
