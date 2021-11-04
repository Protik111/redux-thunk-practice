import React from 'react';
import { useParams } from 'react-router';

const ProductItem = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Product Item{id}</h2>
        </div>
    );
};

export default ProductItem;