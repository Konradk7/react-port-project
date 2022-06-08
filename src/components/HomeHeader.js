import React from 'react';

function HomeHeader(props) {
    return (
        <nav className="home-nav__container">
            <ul style={{display: "flex", justifyContent: "end"}}>
                <li style={{marginRight: "30px"}}><a href="#" style={{ color: "gray"}}>Zaloguj</a></li>
                <li style={{marginRight: "40px"}}><a href="#" style={{ color: "gray"}}>Załóż konto</a></li>
            </ul>
            <ul className="home-nav__container-list">
                <li><a href="#">Start</a></li>
                <li><a href="#">O co chodzi?</a></li>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Fundacja i organizacje</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>
    );
}

export default HomeHeader;