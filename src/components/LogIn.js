import React from 'react';
import Navigation from "./Navigation";
import Decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

function LogIn() {
    return (
        <div className="login">
            <div className="login--navigation">
                <Navigation/>
            </div>
            <div className="login__container">
                <div >
                    <h1>Zaloguj się</h1>
                    <img src={Decoration} alt="decoration"/>
                </div>
                <form>
                    <label htmlFor="name">Email</label>
                    <input type="email" name="email"/>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password"/>
                </form>
                <div>
                    <Link to="/register">Załóż konto</Link>
                    <button>Zaloguj się</button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;