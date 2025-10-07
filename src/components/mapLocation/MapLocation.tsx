import React, { useEffect, useRef, useState } from "react";
import styles from "./MapLocation.module.scss";

declare global {
  interface Window {
    DG?: any;
  }
}

export const MapLocation: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const scriptId = "dg-map-script";
    const loadScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (document.getElementById(scriptId)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("API 2ГИС не удалось загрузить"));
        document.body.appendChild(script);
      });
    };

    const initMap = async () => {
      if (!window.DG) return;
      await window.DG;

      const avenirCoordinates: [number, number] = [42.885293, 74.634191];
      const map = window.DG.map(mapRef.current, { center: avenirCoordinates, zoom: 17 });

      const popupContent = `
        <div class="${styles.mapPopup}">
          <header>
            <h2>Avenir College</h2>
          </header>
          <p style="font-size:14px;">ул. Мусы Джалиля 192, Бишкек</p>
        </div>
      `;

      window.DG.marker(avenirCoordinates).addTo(map).bindPopup(popupContent).openPopup();
    };

    loadScript().then(initMap).catch(console.error);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (mapRef.current && textRef.current) {
      observer.observe(mapRef.current);
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container" aria-label="Расположение Avenir College">
      <h1
        ref={textRef}
        className={`${styles.title} ${animated ? styles.animated : ""}`}
      >
        Наше местоположение
      </h1>
      <div
        ref={mapRef}
        className={`${styles.mapContainer} ${animated ? styles.animated : ""}`}
        role="region"
        aria-label="Карта Avenir College"
      ></div>
    </section>
  );
};
