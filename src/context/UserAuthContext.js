import { createContext, useEffect, useState, useContext } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    // browserSessionPersistence,
    // setPersistence
} from 'firebase/auth';
import { auth } from '../auth/firebase'

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        // setPersistence(auth, browserSessionPersistence)
        //     .then(() => {
        //         return signInWithEmailAndPassword(auth, email, password)
        //     })
        //     .catch((error) => {
        //         console.log(error.message)
        //     })
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    function logOut() {
        return signOut(auth);
    }


    //mount onAuthStateChanged only when component is mounted
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);
    //provider
    return <userAuthContext.Provider value={{ user, signUp, login, logOut, googleSignIn, resetPassword }}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext);
}