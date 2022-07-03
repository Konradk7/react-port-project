import React, {useState} from 'react';
import Navigation from "./Navigation";
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {auth, signInWithGoogle} from "./Firebase";
import {Link} from "react-router-dom";
import Google from "../assets/google.png";
import Dec from "../assets/Decoration.svg";



function LogIn() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
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
        }
    };


    return (
        <div className="login">
            <div className="login--navigation">
                <Navigation user={user}/>
            </div>
            {user?.email ?
                <div className="logout__container">
                    <h2>Zalogowanie nastąpiło <span>pomyślnie!</span></h2>
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