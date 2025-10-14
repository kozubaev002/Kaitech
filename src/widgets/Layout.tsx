import React from "react";
import Header from "./header/Header"
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

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
