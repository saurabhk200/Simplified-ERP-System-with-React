import React, { useState } from 'react';
import './OrderForm.css'; 

function OrderForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        orderId: '',
        customerName: '',
        orderDate: '',
        status: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            orderId: '',
            customerName: '',
            orderDate: '',
            status: ''
        });
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="form-input" type="text" name="orderId" placeholder="Order ID" value={formData.orderId} onChange={handleChange} />
            <input className="form-input" type="text" name="customerName" placeholder="Customer Name" value={formData.customerName} onChange={handleChange} />
            <input className="form-input" type="date" name="orderDate" placeholder="Order Date" value={formData.orderDate} onChange={handleChange} />
            <input className="form-input" type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} />
            <button className="form-submit" type="submit">Submit</button>
        </form>
    );
}

export default OrderForm;
