import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectProducts, removeProduct } from '../../redux/FakeStore/FakeStore.action';

const ProductItem = () => {
    // const [item, setItem] = useState({});
    const product = useSelector((state) => state.selectedProducts);
    const { id } = useParams();
    const dispatch = useDispatch();
    const {title, description, image, price } = product;

    useEffect(() => {
        if (id && id !== '') {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(data => dispatch(selectProducts(data)))
        }
        return () => {
            dispatch(removeProduct());
        }
    }, [id])

    console.log('product', product);

    // console.log(item);
    return (
        <div className="text-center">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h5>{title}</h5>
                    <h5>{price} $</h5>
                    <p><bold>{description}</bold></p>
            </div>
        </div>
    );
};

export default ProductItem;