import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Decoration from "../assets/Decoration.svg";

function Register() {
    // const Register = () => {
    //     const [login, setLogin] = useState("");
    //     const [password, setPassword] = useState("");
    //     let history = useHistory();
    //
    //     const submitHandler = (e) => {
    //         e.preventDefault();
    //         const auth = getAuth(app);
    //         createUserWithEmailAndPassword(auth, login, password)
    //             .then(() => {
    //                 signInWithEmailAndPassword(auth, login, password)
    //                     .then(() => {
    //                         history.push("/")
    //                     })
    //                     .catch((error) => {
    //                         const errorCode = error.code;
    //                         const errorMessage = error.message;
    //                         console.error(errorCode, errorMessage);
    //                     });
    //             })
    //             .catch((error) => {
    //                 const errorCode = error.code;
    //                 const errorMessage = error.message;
    //                 console.error(errorCode, errorMessage)
    //             });
    //     }
    // }
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const register = async () => {

    }
    const login = async () => {

    }
    const logout = async () => {

    }
    return (
        <div className="login">
            <div className="login--navigation">
                <Navigation/>
            </div>
            <div className="login__container">
                <div >
                    <h1>Załóż konto</h1>
                    <img src={Decoration} alt="decoration"/>
                </div>
                <form>
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={(event) => {
                            setRegisterEmail(event.target.value)
                        }}
                    />
                    <label htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(event) => {
                            setLoginPassword(event.target.value)
                        }}
                    />
                    <label htmlFor="repeat-password">Powtórz hasło</label>
                    <input
                        type="password"
                        name="repeat-password"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value)
                        }}
                    />
                </form>
                <div className="login__container--footer">
                    <Link to="/login">Zaloguj się</Link>
                    <button>Załóż konto</button>
                </div>
            </div>
        </div>
    );
}

export default Register;