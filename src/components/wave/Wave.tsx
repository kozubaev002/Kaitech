import React from "react";
import styles from "./Wave.module.scss";

const Wave: React.FC = () => {
  return (
    <div className={styles.waveContainer}>
      <svg
        viewBox="0 0 1240 400"
        preserveAspectRatio="none"
        className={styles.waveSvg}
      >
        <path
          d="
      M0 400
      C350 -540, 440 500, 650 300
      C1150 -540, 1300 665, 1340 500
    "
          fill="none"
          stroke="#f97316"
          strokeWidth="4"
          strokeDasharray="10"
        />
      </svg>
    </div>
  );
};

export default Wave;