import React from 'react';
import {Link} from "react-router-dom"
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'



function Navigation() {
    let scroll   = Scroll.animateScroll;
    const scrollTo = () => {
        scroll.scrollTo(1000);
    }
    return (
            <nav className="home-nav__container">
                <ul className="home-nav__container--header">
                    <li><Link to="/login">Zaloguj</Link></li>
                    <li><Link to="/register">Załóż konto</Link></li>
                </ul>
                <ul className="home-nav__container--list">
                    <li><Scroll to="/">Start</></li>
                    <li><a onClick={scrollTo}>O co chodzi?</a></li>
                    <li><Scroll to="/about-us">O nas</Scroll></li>
                    <li><Scroll to="#">Fundacja i organizacje</Scroll></li>
                    <li><Scroll to="#">Kontakt</Scroll></li>
                </ul>
            </nav>
    );
}

export default Navigation;