import React from 'react';
import './PlaceOrder.css';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    return (
        <div>
            <div className="user">
            <form action="">
                <input type="text" placeholder="Address" />
                <input type="email" placeholder="zipcode" />
                <input type="password" placeholder="city" />
                <input type="password" placeholder="country" />
                <Link to="/Delivery" className="submit" >use the address</Link>
            </form>
        </div>
        </div>
    );
};

export default PlaceOrder;