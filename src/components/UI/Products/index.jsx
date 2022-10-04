import React from 'react';
import './ProductCard.css';
import ProductCard from "./ProductCard";

const Products = ({data}) => {
    return (
        <>
            {
                data.map((item) => <ProductCard key={item.id} item={item}/> )
            }
        </>
    );
};

export default Products;
