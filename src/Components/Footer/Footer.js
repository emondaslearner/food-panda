import React from 'react';
import './Fooder.css';

const Footer = () => {
    return (
    <>
        <div className="footer">
            <div className="img">
                <img src="../image/logo1.png" alt=""/> 
            </div>
            <div className="right">
                <ul>
                    <li><a href="">About online food</a></li>
                    <li><a href="">Read our blog</a></li>
                    <li><a href="">Sign up to deliver</a></li>
                    <li><a href="">Add to restaurant</a></li>
                </ul>
                <ul>
                    <li><a href="">Get help</a></li>
                    <li><a href="">Read FAQs</a></li>
                    <li><a href="">View all cities</a></li>
                    <li><a href="">Restaurant near me</a></li>
                </ul>
            </div>  
        </div>
     </>
    );
};

export default Footer;