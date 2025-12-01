import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Layout: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Kaitech</title>
                <meta
                    name="description"
                    content="Kaitech — платформа, где студенты создают реальные IT-проекты, учатся веб-разработке, UX/UI и цифровым навыкам."
                />
                <meta
                    name="keywords"
                    content="Kaitech, обучение, студенты, IT, веб-разработка, проекты, UX/UI, цифровые продукты"
                />
                <meta name="author" content="Kaitech Team" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://kaitech.example.com/" />

                <meta property="og:title" content="Kaitech — образовательная платформа" />
                <meta
                    property="og:description"
                    content="Студенты создают реальные проекты и изучают навыки IT на платформе Kaitech."
                />
                <meta property="og:image" content="https://kaitech.example.com/og-image.png" />
                <meta property="og:url" content="https://kaitech.example.com" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kaitech — образовательная платформа" />
                <meta
                    name="twitter:description"
                    content="Создавайте реальные проекты и учитесь IT-навыкам на Kaitech."
                />
                <meta name="twitter:image" content="https://kaitech.example.com/og-image.png" />

                <link rel="icon" type="image/png" href="https://kaitech.example.com/logo.png" />

                <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Kaitech",
          "url": "https://kaitech.example.com",
          "logo": "https://kaitech.example.com/logo.png",
          "sameAs": ["https://linkedin.com/company/kaitech"],
          "description": "Kaitech — образовательная платформа для студентов, где создаются реальные проекты и изучаются навыки веб-разработки."
        }
        `}</script>

                <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Kaitech",
          "url": "https://kaitech.example.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://kaitech.example.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
        `}</script>
            </Helmet>

            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
