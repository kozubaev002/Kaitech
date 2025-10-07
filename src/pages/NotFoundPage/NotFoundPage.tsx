import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Страница не найдена</p>
      <button className={styles.button} onClick={goHome}>
        На главную
      </button>
    </div>
  );
};

export default NotFound;
