import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../widgets/banner/Banner";
import { ProjectsSection } from "../components/projectsSection/ProjectsSection.tsx";
import { Services } from "../components/services/services/Services.tsx";
import { Team } from "../components/team/Team.tsx";
import CompanyKgz from "../components/companyKGZ/CompanyKgz.tsx";
import ContactForm from "../components/contactForm/ContactForm.tsx";
import Swiper from "../components/swiper/Swiper.tsx";
import Wave from "../components/wave/Wave.tsx";
import { LatestNews } from "../components/latestNews/LatestNews.tsx";
import { MapLocation } from "../components/mapLocation/MapLocation.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Kaitech</title>
                <meta
                    name="description"
                    content="Kaitech — образовательная IT-платформа, где студенты создают реальные проекты, изучают веб-разработку, UX/UI и цифровые навыки. Учись, создавай и развивайся с Kaitech."
                />
                <meta
                    name="keywords"
                    content="Kaitech, обучение IT, веб-разработка, проекты студентов, UX/UI, цифровые навыки, IT-платформа"
                />
                <link rel="canonical" href="https://kaitech.example.com/" />

                <meta property="og:title" content="Kaitech — образовательная платформа" />
                <meta
                    property="og:description"
                    content="Создавайте реальные проекты и изучайте IT-навыки на платформе Kaitech."
                />
                <meta property="og:image" content="https://kaitech.example.com/og-image.png" />
                <meta property="og:url" content="https://kaitech.example.com/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kaitech — образовательная платформа" />
                <meta
                    name="twitter:description"
                    content="Создавайте реальные проекты и изучайте IT-навыки на платформе Kaitech."
                />
                <meta name="twitter:image" content="https://kaitech.example.com/og-image.png" />

                <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Kaitech",
          "url": "https://kaitech.example.com",
          "logo": "https://kaitech.example.com/logo.png",
          "sameAs": ["https://linkedin.com/company/kaitech"],
          "description": "Kaitech — образовательная платформа, где студенты создают реальные проекты и изучают IT-навыки."
        }
        `}</script>
            </Helmet>

            <div id="banner">
                <Banner />
            </div>
            <ProjectsSection />
            <div id="services">
                <Services />
            </div>
            <div id="swiper">
                <Swiper />
            </div>
            <div id="team">
                <Team />
            </div>
            <LatestNews />
            <CompanyKgz />
            <Wave />
            <div id="contact">
                <ContactForm />
            </div>
            <MapLocation />
        </div>
    );
};

export default Home;