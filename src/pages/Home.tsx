import React from "react";
import Banner from "../widgets/banner/Banner";
import { ProjectsSection } from "./projectsSection/ProjectsSection.tsx";
import { Services } from "./services/services/Services.tsx";
import {Team} from "./team/team/Team.tsx";
import CompanyKgz from "./companyKGZ/CompanyKgz.tsx";
import Swiper from "./swiper/Swiper.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <Banner />
            <ProjectsSection />
            <Services />
            <Team/>
            <Swiper/>
            <CompanyKgz/>
        </div>
    );
};

export default Home;