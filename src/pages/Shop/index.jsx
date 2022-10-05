import React from 'react';
import './Shop.css';
import Helmet from "../../components/Helmet";
import CommonSection from "../../components/UI/CommonSection";

const Shop = () => {
    return (
        <Helmet title='Shop'>
            <CommonSection title='Products' />
        </Helmet>
    );
};

export default Shop;
