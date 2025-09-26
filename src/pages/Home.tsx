import React from "react";
import {ProjectsSection} from "./projectsSection/ProjectsSection.tsx";
import {Services} from "./services/Services.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <ProjectsSection/>
            <Services/>
        </div>
    );
};

export default Home;
