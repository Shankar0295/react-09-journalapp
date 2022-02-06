import { createContext, useEffect, useState, useContext } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    browserSessionPersistence,
    setPersistence
} from 'firebase/auth';
import { auth } from '../auth/firebase'
import Loading from '../components/Loading/Loading'

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = async (email, password) => {
        try {
            await setPersistence(auth, browserSessionPersistence);
            // await signInWithEmailAndPassword(auth, email, password)
            return signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
        }

    }

    const googleSignIn = async () => {
        const googleAuthProvider = new GoogleAuthProvider();
        await setPersistence(auth, browserSessionPersistence);
        return signInWithPopup(auth, googleAuthProvider)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    //mount onAuthStateChanged only when component is mounted
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser ? currentuser : null);
            setPending(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    if (pending) {
        return <Loading />
    }
    //provider
    return <userAuthContext.Provider value={{ user, signUp, login, googleSignIn, resetPassword }}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext);
}