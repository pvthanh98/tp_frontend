import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = () =>{
    console.log("xac thuc")
    if(localStorage.getItem('token')) return true;
    return false;
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};
export default PrivateRoute