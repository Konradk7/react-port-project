import React, {useState} from 'react';
import Navigation from "./Navigation";
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth, signInWithGoogle} from "./Firebase";
import {Link} from "react-router-dom";
import Google from "../assets/google.png";
import Dec from "../assets/Decoration.svg";



function LogIn({logout, logoutUser, user}) {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [err, setErr] = useState(false);


    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
            setErr(true);
        }
    };



    return (
        <div className="login">
            <div className="login--navigation">
                <Navigation user={user} logout={logout}/>
            </div>
            {logoutUser ?
                <div className="logout__container">
                    <h2>Wylogowanie nastąpiło <span>pomyślnie!</span></h2>
                    <img src={Dec} alt="decoration"/>
                    <Link to="/">Strona główna</Link>
                </div>
            :

                <div className="login__container">
                <div>
                    <h1>Zaloguj się</h1>
                    <img src={Dec} alt="decoration"/>
                </div>
                <form>
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={(event) => {
                            setLoginEmail(event.target.value)
                        }}
                    />
                    <label htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />
                    {err && <div className="error-message">Nieprawidłowy email lub hasło</div>}
                </form>
                <div className="login__container--footer">
                    <Link to="/register">Załóż konto</Link>
                    <button onClick={login}>Zaloguj się</button>
                </div>
            </div>
            }

            <div className="login__container--google">
                <button onClick={signInWithGoogle}><img src={Google} alt="google"/>Zaloguj się przez Google</button>
            </div>
            {/*<h4>{localStorage.getItem("name")}</h4>*/}
            {/*<h4>{localStorage.getItem("email")}</h4>*/}
        </div>
    );
}

export default LogIn;