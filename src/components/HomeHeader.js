import React from 'react';
import Decoration from '../assets/Decoration.svg'

function HomeHeader() {
    return (
        <div style={{position: "relative", right: "100px"}}>
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
            <div className="home-header__container">
                <h1 className="home-header__container--title">
                    Zacznij pomagać!
                    <br/> Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <img src={Decoration} alt="decoration" style={{marginLeft: "180px", marginTop: "20px"}}/>
                <div>
                    <a href="#">Oddaj rzeczy</a>
                    <a href="#">Zorganizuj zbiórkę</a>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;