// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpsdXyfZw0YraJ5EdeD3kZkpHBk1Sqq5M",
    authDomain: "react-journal-pennify.firebaseapp.com",
    projectId: "react-journal-pennify",
    storageBucket: "react-journal-pennify.appspot.com",
    messagingSenderId: "815091465793",
    appId: "1:815091465793:web:6b8735274503641983d0c0",
    measurementId: "G-EBSTXGKX25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app;