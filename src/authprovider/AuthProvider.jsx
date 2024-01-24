import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getAuth, createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword,signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import app from "../authorization/firebase.config"

import usePublic from "../hooks/usePublic";

export const AuthContext = createContext(null)
const auth = getAuth(app);

export default function AuthProvider({children}) {
    const axiosPublic = usePublic()
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    const provider = new GoogleAuthProvider();

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {
        signInWithPopup(auth,provider)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if(currentUser){
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false)
                        }
                    })
            }
            else{
                localStorage.removeItem('access-token');
            }
            
        });
        return () => {
            return unsubscribe();
        }
    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
