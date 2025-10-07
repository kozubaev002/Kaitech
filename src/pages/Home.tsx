import React from "react";
import Banner from "../widgets/banner/Banner";
import {ProjectsSection} from "../components/projectsSection/ProjectsSection.tsx";
import {Services} from "../components/services/services/Services.tsx";
import {Team} from "../components/team/Team.tsx"
import CompanyKgz from "../components/companyKGZ/CompanyKgz.tsx";
import ContactForm from "../components/contactForm/ContactForm.tsx";
import Swiper from "../components/swiper/Swiper.tsx";
import Wave from "../components/wave/Wave.tsx";
import { LatestNews } from "../components/latestNews/LatestNews.tsx"
import { MapLocation } from "../components/mapLocation/MapLocation.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <div id="banner">
                <Banner/>
            </div>
            <ProjectsSection/>
            <div id="services">
                <Services/>
            </div>
            <div id="swiper">
                <Swiper/>
            </div>
            <div id="team">
                <Team/>
            </div>
            <LatestNews />
            <CompanyKgz />
            <Wave />
            <div id="contact">
                <ContactForm/>
            </div>
            <MapLocation/>
        </div>
    );
};

export default Home;