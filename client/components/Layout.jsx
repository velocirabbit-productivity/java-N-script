import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import '../stylesheets/layout.css'
import { useAuth } from '../context/useAuthContext';

function Layout() {
  const { loggedInUser } = useAuth();
    return (loggedInUser ? <Outlet /> : <Navigate to="/" replace={true}/>
    );
}

    export default Layout;