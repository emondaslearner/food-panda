import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Header = () => {
    const getNotification = getDatabaseCart();
    const getNotificationKey = Object.keys(getNotification);
    const countNotification = getNotificationKey.length;
    const gets = localStorage.getItem('user');
    const user = JSON.parse(gets);
    const singOut = () => {
        localStorage.removeItem('user');
    }
    return (
        <div className="header">
            <div className="left">
                <Link to="/home"><img src="../image/logo.png" alt=""/></Link>
            </div>
            <div className="right">
                <nav>
                    <Link to="/Cart">
                        <Badge badgeContent={countNotification} color="error">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Badge>
                    </Link>
                {
                    user ? <a onClick={singOut} href="">Sing out</a> : <Link to="/User">Sing up</Link>
                }
                </nav>
            </div>
        </div>
    );
};

export default Header;