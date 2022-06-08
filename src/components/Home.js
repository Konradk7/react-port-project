import React from 'react';
import HomeHeader from "./HomeHeader";
import Items from "../assets/Hero Image@2x.png"

function Home(props) {
    return (
        <div style={{display: "flex"}}>
            <img src={Items} alt="items" style={{height: "700px", position: "relative", left: "-320px", width: "950px"}}/>
            <HomeHeader />
        </div>
    );
}

export default Home;