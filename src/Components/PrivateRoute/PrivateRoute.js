import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { context } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [foodData,setFoodData] = useContext(context);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                foodData != undefined ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;