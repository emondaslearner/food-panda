import React, { useState } from 'react';
import './Food.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lunch from '../Lunch/Lunch';
import Data from '../Data/Data.json';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';

const Food = () => {
    const [active,setActive] = useState('Lunch');
    const lunch =  Data.filter(singleFood => singleFood.category === 'lunch');
    const dinner =  Data.filter(singleFood => singleFood.category === 'dinner');
    const breakfast =  Data.filter(singleFood => singleFood.category === 'breakfast');
    return (
        <div className="check-item">
                <ul className="foods">
                        <li onClick={event => setActive('Breakfast')}><Link className={active == 'Breakfast' && active} to="/breakfast">Breakfast</Link></li>
                        <li onClick={event => setActive('Lunch')}><Link className={active == 'Lunch' && active} to="/lunch">Lunch</Link></li>
                        <li onClick={event => setActive('Dinner')}><Link className={active == 'Dinner' && active} to="/dinner">Dinner</Link></li>
                </ul>
                <div className="all-items">
                    <Switch>
                        <Route path="/breakfast">
                            {
                                breakfast.map(all => <Breakfast key={all.id} item={all} ></Breakfast>)
                            }
                        </Route>
                        <Route path="/lunch">
                            {
                                lunch.map(all => <Lunch key={all.id} item={all} ></Lunch>)
                            }
                        </Route>
                        <Route path="/dinner">
                            {
                                dinner.map(all => <Dinner key={all.id} item={all} ></Dinner>)
                            }
                        </Route>
                        <Route path="/">
                            {
                                lunch.map(all => <Lunch key={all.id} item={all} ></Lunch>)
                            }
                        </Route>
                    </Switch>
                </div>
        </div>
    );
};

export default Food;