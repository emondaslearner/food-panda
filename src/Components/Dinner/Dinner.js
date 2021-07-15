import { Grid } from '@material-ui/core';
import './Dinner.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../App';

const Dinner = (props) => {
    const {img,food,shotDes,prize,id} = props.item;
    const [foodData,setFoodData] = useContext(context);
    return (
      <Link to="/Add">
        <div onClick={() => setFoodData(id)} className="food">
          <img src={img} alt=""/>
          <h5>{food}</h5>
          <p>{shotDes}</p>
          <h4>${prize}</h4>  
        </div>
      </Link>
    );
};

export default Dinner;