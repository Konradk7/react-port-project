import React from 'react';

function HomeHeader() {
    return (
        <div>
            <nav className="home-nav__container">
                <ul className="home-nav__container--header">
                    <li><a href="#">Zaloguj</a></li>
                    <li><a href="#">Załóż konto</a></li>
                </ul>
                <ul className="home-nav__container--list">
                    <li><a href="#">Start</a></li>
                    <li><a href="#">O co chodzi?</a></li>
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">Fundacja i organizacje</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
            <h1 className="home-nav__container--title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
        </div>
    );
}

export default HomeHeader;