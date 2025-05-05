import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user}=useContext(AuthContext);

    if(user && user?.email){
        return children;
    }else{
        
    }

    
};

export default PrivateRoute;