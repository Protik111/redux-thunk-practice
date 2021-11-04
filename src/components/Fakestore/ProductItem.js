import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductItem = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    console.log(item);
    return (
        <div className="text-center">
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div>
                    <h5>{item.title}</h5>
                    <h5>{item.price} $</h5>
                    <p><bold>{item.description}</bold></p>
                </div>
        </div>
    );
};

export default ProductItem;