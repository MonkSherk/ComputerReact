// eslint-disable-next-line no-unused-vars
import React from "react";
import './Styles/ProductList.css'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types
function ProductList({ products }) {
    return (
        <div>
            <h2>Список товаров</h2>
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {products.map((product, index) => (
                    <li key={index}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: {product.price}</p>
                        <p>Год: {product.year}</p>
                        <p>Производитель: {product.manufacturer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;