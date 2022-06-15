import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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
const db = getFirestore(app);
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
