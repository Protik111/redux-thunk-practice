import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductDetail = (props) => {
    
    const products = useSelector((state) => state.allProducts.products);

    // const { id, title, price, description } = products[0]

    const {id, title, description, image, price } = props.pd;
    return (
        <div className="col-md-4 productItem text-center">
            <Link to={`/productItem/${id}`}>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <p>{title}</p>
                    <p>{price} $</p>
                    {/* <p>{description}</p> */}
                </div>
            </Link>
        </div>
        // </Link>
    );
};

export default ProductDetail;