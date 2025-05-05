import React, { createContext, useState } from 'react';
export const AuthContext=createContext()


const AuthProvider = ({children}) => {




    const createUser=(email,password)=>{
         
    }

    const authData={
        
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;