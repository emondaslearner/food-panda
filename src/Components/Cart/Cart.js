import React from 'react';
import { Link } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';
import CartItems from '../CartItems/CartItems';
import Data from '../Data/Data.json';
import './Cart.css';

const Cart = () => {

    const getCart = getDatabaseCart();
    const getKeys = Object.keys(getCart);
    const getCartFood = getKeys.map(key => {
        const getNew = Data.filter(foods => foods.id == key);
        getNew.map(items => items.qty = getCart[key]);
        return getNew;
    })


    let subTotal = 0;
    for(let i = 0;i < getCartFood.length;i++){
        const sub = getCartFood[i][0].prize * getCartFood[i][0].qty; 
        subTotal = sub + subTotal;
    }
    
    const tax = Math.round(subTotal % 5);

    const total = subTotal + tax + 2;
    return (
        <div className="main-cart">
            <div className="cart">
                <h3 className="cartAdd">You have added these foods in your cart</h3>
                {
                    getCartFood.map(cartItem => <CartItems key={cartItem.id} item={cartItem}></CartItems>)
                }
            </div>
            <div className="total">
                <h5>Subtotal: <span>${subTotal}</span></h5>
                <h5>Tax: <span>${tax}</span></h5>
                <h5>Delivery fee: <span>$2</span></h5>
                <h4>Total: <span>${total}</span></h4>
                {
                    getCartFood.length == 0?<button>Place order</button>:<Link to="/PlaceOrder">Place order</Link>
                }
            </div>
        </div>
    );
};

export default Cart;