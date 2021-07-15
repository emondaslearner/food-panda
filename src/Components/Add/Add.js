import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { context } from '../../App';
import Data from '../Data/Data.json';
import './Add.css';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Add = () => {
    
    const [foodData,setFoodData] = useContext(context);
    const check = Data.filter(food => food.id === foodData);
    const {food,longDes,prize,img,id} = check[0];
    const HandleQty = (Qty) => {
        if(Qty){
            const element = document.querySelector('.qty').innerHTML
            if(element < 2){
                document.querySelector('.qty').innerHTML = 1;
            }else{
                document.querySelector('.qty').innerHTML--;
            }
        }else{
            document.querySelector('.qty').innerHTML++;
        }

    }

    
    const handleCart = (number) => {
        const count = document.querySelector('.qty').innerHTML;
        addToDatabaseCart(number,count);
    }
    return (
        <div class="Add">
            <div className="left-text">
                <h1>{food}</h1>
                <p>{longDes}</p>
                <div className="prizeAndQty">
                    <h2>${prize}</h2>
                    <div className="controlQty">
                        <span onClick={() => HandleQty(true)}>-</span> 
                        <span className="qty" >1</span> 
                        <span onClick={() => HandleQty(false)}>+</span>
                    </div>
                </div>
                <a href="" onClick={() => handleCart(id)} className="button">Add<FontAwesomeIcon icon={faShoppingCart} /></a>
            </div>
            <div className="right-img">
                <img src={img} alt=""/>
            </div>
        </div>
    );
};

export default Add;
