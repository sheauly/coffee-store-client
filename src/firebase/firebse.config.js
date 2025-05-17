import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnYRnQ-WYpvWuZ-7LvpswKROvjZtFJxgk",
    authDomain: "coffee-store-application-883be.firebaseapp.com",
    projectId: "coffee-store-application-883be",
    storageBucket: "coffee-store-application-883be.firebasestorage.app",
    messagingSenderId: "452568143307",
    appId: "1:452568143307:web:948d734263db2eca78524e",
    measurementId: "G-QBG6EF6D11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);