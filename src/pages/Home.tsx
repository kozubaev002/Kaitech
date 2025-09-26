import React from "react";
import Banner from "../widgets/banner/Banner";
import {ProjectsSection} from "./projectsSection/ProjectsSection.tsx";
import {Services} from "./services/Services.tsx";

const Home: React.FC = () => {
    return (
        <div>
             <Banner/>
<ProjectsSection/>
            <Services/>

        </div>
    );
};

export default Home;