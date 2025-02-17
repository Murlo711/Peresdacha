import React from "react";
import Stars from "./Stars";
import './Product.css';

const Product = ({ product, onDoubleClick }) => {
    return (
        <div className="product" onDoubleClick={onDoubleClick}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <Stars rating={product.rating} />
        </div>
    );
}

export default Product;

