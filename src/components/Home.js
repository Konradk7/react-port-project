import React from 'react';
import HomeHeader from "./HomeHeader";
import StatisticsHome from "./StatisticsHome";
import Settings from "./Settings";
import Items from "../assets/Hero Image@2x.png"
import AboutUs from "./AboutUs";
import AboutWork from "./ AboutWork";


function Home() {
    return (
        <div>
            <div style={{display: "flex"}}>
                <img src={Items}
                     alt="items"
                     style={{
                         height: "800px",
                         position: "relative",
                         left: "-320px",
                         width: "950px"
                }}/>
                <HomeHeader/>
            </div>
            <StatisticsHome/>
            <Settings />
            <AboutUs />
            <AboutWork />
        </div>
    );
}

export default Home;