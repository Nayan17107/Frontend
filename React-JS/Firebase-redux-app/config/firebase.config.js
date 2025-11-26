import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAV8qeszSC2GGViKbZhAJ3cJbMArW1aiYg",
    authDomain: "myntra-app-96868.firebaseapp.com",
    projectId: "myntra-app-96868",
    storageBucket: "myntra-app-96868.firebasestorage.app",
    messagingSenderId: "871977402734",
    appId: "1:871977402734:web:a216c06786334c04be017f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);