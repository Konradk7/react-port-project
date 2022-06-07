import React from 'react';

function HomeHeader(props) {
    return (
        <nav className="home-nav__container">
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