import React from 'react';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import mockProducts from '../mockData/products';
import './Products.css'; 

function Products() {
    return (
        <div className="products-container">
            <h1 className="products-heading">Products Management</h1>
            <ProductForm />
            <ul className="product-list">
                {mockProducts.map(product => (
                    <li key={product.id} className="product-item">
                        <ProductItem product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
