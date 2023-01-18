import React from 'react';
import { Link, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../context/useAuthContext';

import '../stylesheets/layout.css'

const AuthRoute = () => {
    const { loggedInUser } = useAuth();
    return ( loggedInUser ?  <Outlet /> : <Link to='/'/>
    );
}

export default AuthRoute;
