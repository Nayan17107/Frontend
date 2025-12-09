import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFG4xP-wBW2XOHOhdCuCbyXZhHWEh4X8k",
    authDomain: "myntra-75475.firebaseapp.com",
    projectId: "myntra-75475",
    storageBucket: "myntra-75475.firebasestorage.app",
    messagingSenderId: "416795440538",
    appId: "1:416795440538:web:6a817e1ecfb4a94570f623"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
