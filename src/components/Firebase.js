// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcOrhw4CS_QrxrHBk1x2DpydhIrT5wu90",
    authDomain: "donateapp-2f8bc.firebaseapp.com",
    projectId: "donateapp-2f8bc",
    storageBucket: "donateapp-2f8bc.appspot.com",
    messagingSenderId: "995115974856",
    appId: "1:995115974856:web:56d09b18b45c2bb93225fd",
    measurementId: "G-N3L92FRME6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);