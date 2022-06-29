import {getAnalytics} from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

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

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePicture = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePicture", profilePicture);


        }).catch((error) => {
        console.log(error)
    })
}
