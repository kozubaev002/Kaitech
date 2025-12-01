import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./NotFoundPage.module.scss";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.notFound}>
      <Helmet>
        <meta
          name="description"
          content="Запрашиваемая страница не найдена. Перейдите на главную страницу Kaitech."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Страница не найдена</p>
      <button className={styles.button} onClick={goHome}>
        На главную
      </button>
    </div>
  );
};

export default NotFound;
