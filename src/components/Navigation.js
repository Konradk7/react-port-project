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
                    <li><Link to="#">O co chodzi?</Link></li>
                    <li><Link to="/about-us">O nas</Link></li>
                    <li><Link to="#">Fundacja i organizacje</Link></li>
                    <li><Link to="#">Kontakt</Link></li>
                </ul>
            </nav>
    );
}

export default Navigation;