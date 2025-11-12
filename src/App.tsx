import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import Layout from "./widgets/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFoundPage/NotFoundPage";

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
};

export default App;
