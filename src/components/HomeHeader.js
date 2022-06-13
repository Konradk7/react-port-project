import React from 'react';
import {
    Link
} from "react-router-dom";
import Decoration from '../assets/Decoration.svg'
import Navigation from "./Navigation";

function HomeHeader() {
    return (
        <div>
            <Navigation />
            <div className="home-header__container">
                <h1 className="home-header__container--title">
                    Zacznij pomagać!
                    <br/> Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <img src={Decoration} alt="decoration" style={{marginLeft: "190px", marginTop: "20px"}}/>
                <div style={{display: "flex"}}>
                    <Link to="/give-items" style={{display: "flex", flexDirection: "column"}}><span>Oddaj</span> <span>rzeczy</span></Link>
                    <a href="#" style={{display: "flex", flexDirection: "column"}}><span>Zorganizuj</span><span>zbiórkę</span></a>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;