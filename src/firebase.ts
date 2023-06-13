// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "budget-app-989fc.firebaseapp.com",
    projectId: "budget-app-989fc",
    storageBucket: "budget-app-989fc.appspot.com",
    messagingSenderId: "444021028819",
    appId: "1:444021028819:web:57b46e8fffb42506b4e126",
    measurementId: "G-VNNZG2MSGP",
    databaseURL: 'https://budget-app-989fc-default-rtdb.europe-west1.firebasedatabase.app'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;