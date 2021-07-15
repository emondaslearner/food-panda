import React from 'react';
import { removeFromDatabaseCart } from '../../utilities/databaseManager';
import './CartItem.css'

const CartItems = (props) => {
    const {id,food,prize,img,qty} = props.item[0];
    const remove = (id) => {
        removeFromDatabaseCart(id);
    }
    return (
        <div className="item">
            <div className="cart-left">
                <img src={img} alt=""/>
            </div>
            <div className="cart-middle">
                <h5>{food}</h5>
                <h4>${prize}</h4>
                <a href="" onClick={() => remove(id)}>Remove</a>
            </div>
            <div className="cart-right">
                <h4>{qty}</h4>
            </div>
        </div>
    );
};

export default CartItems;