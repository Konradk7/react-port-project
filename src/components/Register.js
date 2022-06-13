import React from 'react';
import Navigation from "./Navigation";
import Decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

function Register() {
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
                    <input type="email" name="email"/>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password"/>
                    <label htmlFor="repeat-password">Powtórz hasło</label>
                    <input type="password" name="repeat-password"/>
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