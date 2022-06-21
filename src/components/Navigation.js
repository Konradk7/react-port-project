import React from 'react';
import {Link} from "react-router-dom"
import {Link as ScrollLink} from 'react-scroll';



function Navigation() {
    return (
            <nav className="home-nav__container">
                <ul className="home-nav__container--header">
                    <li><Link to="/login">Zaloguj</Link></li>
                    <li><Link to="/register">Załóż konto</Link></li>
                </ul>
                <ul className="home-nav__container--list">
                    <li><Link to="/">Start</Link></li>
                    <li><ScrollLink to="settings" smooth={true} duration={1000}>O co chodzi?</ScrollLink></li>
                    <li><ScrollLink to="about-us" smooth={true} duration={1000}>O nas</ScrollLink></li>
                    <li><ScrollLink to="about-work" smooth={true} duration={1000}>Fundacja i organizacje</ScrollLink></li>
                    <li><ScrollLink to="footer-form" smooth={true} duration={1000}>Kontakt</ScrollLink></li>
                </ul>
            </nav>
    );
}

export default Navigation;