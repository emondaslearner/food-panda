import React from 'react';
import './Delivery.css';

const Delivery = () => {
    return (
        <div className="delivery">
            <div className="map">
                <img src="../image/Screenshot_7.png" alt=""/>
            </div>
            <div className="details">
                <img src="../image/Group 1151.png" alt=""/>
                <div className="location">
                    <h5>Your Location</h5>
                    <h6>107 Rd No 8</h6>
                    <h5 className="h5">Shop Address</h5>
                    <h6>Chtrapara,raozan</h6>
                </div>
                <h2>09:30</h2>
                <h6>Estimated delivery time</h6>
                <div className="location raider-details">
                    <img src="../image/Group 1152.png" alt=""/>
                    <div className="raider">
                        <h4>Hamim</h4>
                        <h6>payment cash on delivery</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;