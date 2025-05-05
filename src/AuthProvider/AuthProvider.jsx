import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState, } from 'react';
import { auth } from '../Firebase/Firebase.config';
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [user, setUser ]  = useState(null)
    console.log(user)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const logOutUser=()=>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
          unsubscribe()
        };
    }, []);


    const authData = {
        createUser,
        logInUser,
        updateUser,
        setUser,
        logOutUser,
        user,
        
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;