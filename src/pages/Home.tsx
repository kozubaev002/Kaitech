import React from "react";
import Banner from "../widgets/banner/Banner";
import { ProjectsSection } from "./projectsSection/ProjectsSection.tsx";
import { Services } from "./services/services/Services.tsx";
import { Team } from "../pages/team/Team.tsx"
import CompanyKgz from "./companyKGZ/CompanyKgz.tsx";
import ContactForm from "./contactForm/ContactForm.tsx";
import Swiper from "./swiper/Swiper.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <Banner />
            <ProjectsSection />
            <Services />
            <CompanyKgz/>
            <ContactForm/>
            <Swiper />
            <Team />
            <CompanyKgz />
        </div>
    );
};

export default Home;