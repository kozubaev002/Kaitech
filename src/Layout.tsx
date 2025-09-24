import React from "react";
import Header from "./widgets/header/Header";
import Footer from "./widgets/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
