import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router';
import Loader from '../Component/Loader/Loader';

const PrivateRoute = ({children}) => {

    const {user,isLoading}=useContext(AuthContext);

    if(isLoading){
        return <Loader></Loader>
    }

    if(user && user?.email){
        return children;
    }else{
        return <Navigate to='/auth/login'></Navigate>
    }

    
};

export default PrivateRoute;