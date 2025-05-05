import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext,} from 'react';
import { auth } from '../Firebase/Firebase.config';
export const AuthContext=createContext()


const AuthProvider = ({children}) => {




    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }



    const authData={
        createUser,
        logInUser
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;