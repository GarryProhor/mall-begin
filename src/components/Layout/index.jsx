import React from 'react';
import Header from "../Header";
import Routers from "../../routes/Routers";
import Footer from "../Footer";

const Layout = () => {
    return (
        <>
            <Header/>
            <div>
                <Routers/>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;
