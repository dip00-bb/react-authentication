import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState, } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');

    const [isLoading, setLoading] = useState(true);

    // provider 
    const provider = new GoogleAuthProvider;

    // console.log(user)


    const createWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, url) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: url });
    }

    const logOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
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
        setLoading,
        createWithGoogle,
        forgetPassword,
        isLoading,
        user,
        email,
        setEmail

    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;