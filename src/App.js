import React, { createContext, useState } from 'react';
import Food from './Components/Food/Food';
import Header from  './Components/Header/Header';
import Search from './Components/Search/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Add from './Components/Add/Add';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Cart from './Components/Cart/Cart';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import User from './Components/User/User';
import Private from './Components/PrivateRoute/Private';
import Delivery from './Components/Delivery/Delivery';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Footer from './Components/Footer/Footer';

export const context = createContext();

const App = () => {
  const [foodData,setFoodDate] = useState();
  return (
      <context.Provider value={[foodData,setFoodDate]}>
        <div className="food-panda">
          <Router>
            <Header></Header>
            <Switch>
              <PrivateRoute path="/Add">
                  <Add></Add>
              </PrivateRoute>
              <Route path="/Cart">
                <Cart></Cart>
              </Route>
              <Private path="/PlaceOrder">
                <PlaceOrder></PlaceOrder>
              </Private>
              <Route path="/User">
                <User></User>
              </Route>
              <Route path="/Delivery">
                <Delivery></Delivery>
              </Route>
              <Route path="/">
                <Search></Search>
                <Food></Food>
                <ChooseUs></ChooseUs>
                <Footer></Footer>
              </Route>      
            </Switch>
          </Router>
        </div>
      </context.Provider>
  );
};

export default App;