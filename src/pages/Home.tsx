import React from "react";
import Banner from "../widgets/banner/Banner";
import { ProjectsSection } from "./projectsSection/ProjectsSection.tsx";
import { Services } from "./services/services/Services.tsx";
import {Team} from "./team/team/Team.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <Banner />
            <ProjectsSection />
            <Services />
            <Team/>
        </div>
    );
};

export default Home;