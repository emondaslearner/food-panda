import React from 'react';
import { Redirect, Route, Router } from 'react-router';

const Private = ({children,...rest}) => {
    const gets = localStorage.getItem('user');
    const user = JSON.parse(gets);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/User",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default Private;