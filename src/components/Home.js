import React from 'react';
import HomeHeader from "./HomeHeader";
import Items from "../assets/Hero Image@2x.png"

function Home(props) {
    return (
        <div style={{display: "flex"}}>
            <img src={Items} alt="items" style={{height: "800px", position: "relative", left: "-320px", width: "930px"}}/>
            <HomeHeader />
        </div>
    );
}

export default Home;