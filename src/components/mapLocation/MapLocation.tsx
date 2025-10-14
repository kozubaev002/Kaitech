import React, { useEffect, useRef, useState } from "react";
import styles from "./MapLocation.module.scss";

declare global {
  interface Window {
    ymaps: any;
  }
}

export const MapLocation: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (textRef.current) observer.observe(textRef.current);

    const scriptId = "yandex-map-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      script.async = true;
      document.body.appendChild(script);
      script.onload = initMap;
    } else {
      initMap();
    }

    function initMap() {
      if (!window.ymaps || !mapRef.current) return;

      window.ymaps.ready(() => {
        const coords: [number, number] = [42.885293, 74.634191];
        const map = new window.ymaps.Map(mapRef.current, {
          center: coords,
          zoom: 17,
          controls: ["zoomControl"],
        });

        map.behaviors.disable("scrollZoom");

        const placemark = new window.ymaps.Placemark(
          coords,
          {
            balloonContentHeader: "Avenir College",
            balloonContentBody: "ул. Мусы Джалиля 192, Бишкек",
          },
          {
            preset: "islands#redDotIcon",
          }
        );

        map.geoObjects.add(placemark);
      });
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
