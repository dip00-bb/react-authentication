import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Component/Loader/Loader';

const PrivateRoute = ({children}) => {

    const {user,isLoading}=useContext(AuthContext);

    const location=useLocation();
    // console.log(location)

    if(isLoading){
        return <Loader></Loader>
    }

    if(user && user?.email){
        return children;
    }else{
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }

    
};

export default PrivateRoute;