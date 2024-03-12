import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; 

function OrdersCalendar() {
    const [date, setDate] = useState(new Date());

    const handleDateChange = date => {
        setDate(date);
    };
    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h2>Orders Calendar View</h2>
            </div>
            <Calendar
                onChange={handleDateChange}
                value={date}
            />
        </div>
    );
}

export default OrdersCalendar;
