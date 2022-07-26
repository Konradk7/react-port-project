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
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [user, setUser] = useState({});
    const [err, setErr] = useState("");
    const [registered, setRegistered] = useState("");


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
            setRegistered("Pomyślnie zarejestrowano!")
        } catch (error) {
            console.log(error.message)
            const emailCond =
                "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
            if (registerEmail.trim()) {
                setErr( "Email nie może być pusty");
            } else if (registerEmail.match(emailCond)) {
                setErr("Proszę podaj poprawny adres email");
            } else {
                setErr( "");
            }
            if (registerEmail.length === 0) {
                setErr("Wpisz poprawny email");
            } else if (registerPassword.length <= 6) {
                setErr("Hasło jest zbyt krótkie");
            } else if (registerPassword !== confirmPassword) {
                setErr("Hasła nie zgadzają się");
            } else {
                setErr("Błąd!")
            }
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
                        onChange={(event) => {
                            setConfirmPassword(event.target.value)
                        }}
                    />
                    {err ? <div className="error-message">{err}</div> : ""}
                    {registered ? <div className="well-message">{registered}</div> : ""}
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