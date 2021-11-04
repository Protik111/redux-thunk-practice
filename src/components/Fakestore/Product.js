import React, { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    console.log(product);
    return (
        <div>
            <h2>Product Details</h2>
            <div className="row productContainer">
                {
                    product.map(pd => <ProductDetail key={pd.id} pd={pd}></ProductDetail>)
                }
            </div>
        </div>
    );
};

export default Product;