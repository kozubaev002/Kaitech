import React from "react";
import Banner from "../widgets/banner/Banner";
import { ProjectsSection } from "./projectsSection/ProjectsSection.tsx";
import { Services } from "./services/services/Services.tsx";
import CompanyKgz from "./companyKGZ/CompanyKgz.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <Banner />
            <ProjectsSection />
            <Services />
            <CompanyKgz/>
        </div>
    );
};

export default Home;