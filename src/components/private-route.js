import React from 'react';
import { navigate } from 'gatsby';
import {useIdentityContext } from 'react-netlify-identity';

const PrivateRoute = ({ component: 
Component, location, ...rest}) => {
    const identity = useIdentityContext();
    const isLoggedIn = identity && identity.isLoggedIn;
    
    if(!isLoggedIn && location.pathname !== '/dashboard/login'){
        navigate('/dashboard/login', {replace: true});
        return null;                               //returning null Avoids the possiblity that while redirecting the component will render anything else.
    }

    return <Component {...rest}/>
}

export default PrivateRoute;
