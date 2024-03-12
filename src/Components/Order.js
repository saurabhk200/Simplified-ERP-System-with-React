import React from 'react';
import OrderItem from './OrderItem';
import OrderForm from './OrderForm';
import mockOrders from '../mockData/orders';
import './Orders.css'; 

function Orders() {
    return (
        <div className="orders-container">
            <h1 className="orders-heading">Orders Management</h1>
            <OrderForm className="order-form" />
            <ul className="order-list">
                {mockOrders.map(order => (
                    <li key={order.id} className="order-item">
                        <OrderItem order={order} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Orders;
