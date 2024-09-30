/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)



    const register = (email,password)=>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoader(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }

    const loginWithGoogle = ()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    const loginWithGithub = ()=>{
        setLoader(true)
        return signInWithPopup(auth,githubProvider)
    }

    const updateUserProfile = (name,image)=>{
        setLoader(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL: image
        })
    }
    // observe the current user in all time
    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('observe in user', currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return()=>{
            UnSubscribe()
        }
    },[])


    const authInfo = {user, setUser, loader,register, login, loginWithGoogle, loginWithGithub, logOut, updateUserProfile}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
