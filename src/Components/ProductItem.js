import React from 'react';
import './ProductItem.css'; 

function ProductItem({ product, onDelete, onAdd }) {
    const handleEdit = () => {
        console.log('Edit product:', product);
    };

    const handleDelete = () => {
        onDelete(product.id);
    };
    const handleAdd = () => {
        onAdd(product.id);
    };

    return (
        <li className="product-item">
            <div className="product-details">
                <div>{product.name}</div>
                <div>{product.category}</div>
                <div>{product.price}</div>
                <div>{product.stock}</div>
            </div>
            <div className="product-buttons">
                <button className="edit" onClick={handleEdit}>Edit</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
                <button className="add" onClick={handleAdd}>Add</button>
            </div>
        </li>
    );
}

export default ProductItem;
