import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetail from './ProductDetail';
import axios from 'axios';
import { allProducts } from '../../redux/FakeStore/FakeStore.action';
import { allProductsReducer } from '../../redux/FakeStore/FakeStore.reducer';

const Product = () => {
    const products = useSelector((state => state.allProducts.products))
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const allDatas = await axios
    //     .get('https://fakestoreapi.com/products')
    //     .catch(err => {
    //         console.log(err);
    //     });
    //     dispatch(allProducts(allDatas.data))
    // };

    // useEffect(() => {
    //     fetchProducts();
    // }, [])

    // const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => dispatch(allProducts(data)))
    }, [])

    console.log(products, 'products');
    return (
        <div>
            <h2>Product Details</h2>
            <div className="row productContainer">
                {
                    products.length <1 ? '...Loading':
                    products.map(pd => <ProductDetail key={pd.id} pd={pd}></ProductDetail>)
                }
                {/* <ProductDetail></ProductDetail> */}
            </div>
        </div>
    );
};

export default Product;