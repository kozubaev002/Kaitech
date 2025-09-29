import React from "react";
import Banner from "../widgets/banner/Banner";
import { ProjectsSection } from "./projectsSection/ProjectsSection.tsx";
import { Services } from "./services/services/Services.tsx";
import CompanyKgz from "./companyKGZ/CompanyKgz.tsx";
import ContactForm from "./contactForm/ContactForm.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <Banner />
            <ProjectsSection />
            <Services />
            <CompanyKgz/>
            <ContactForm/>
        </div>
    );
};

export default Home;