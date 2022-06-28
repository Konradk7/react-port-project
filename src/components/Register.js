import React, {useState} from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";
import Decoration from "../assets/Decoration.svg";
import {auth} from "./Firebase";

function Register() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");


    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }



    return (
        <div className="login">
            <div className="login--navigation">
                <Navigation/>
            </div>
            <div className="login__container">
                <div>
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
                            setRegisterPassword(event.target.value)
                        }}
                    />
                    <label htmlFor="repeat-password">Powtórz hasło</label>
                    <input
                        type="password"
                        name="repeat-password"
                    />
                </form>
                <div className="login__container--footer">
                    <Link to="/login">Zaloguj się</Link>
                    <button onClick={register}>Załóż konto</button>
                </div>
            </div>
        </div>
    );
}

export default Register;