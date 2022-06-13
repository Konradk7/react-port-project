import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {
    return (
            <nav className="home-nav__container">
                <ul className="home-nav__container--header">
                    <li><Link to="/login">Zaloguj</Link></li>
                    <li><Link to="/register">Załóż konto</Link></li>
                </ul>
                <ul className="home-nav__container--list">
                    <li><Link to="/">Start</Link></li>
                    <li><a href="#">O co chodzi?</a></li>
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">Fundacja i organizacje</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
    );
}

export default Navigation;