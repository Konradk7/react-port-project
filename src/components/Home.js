import React from 'react';
import HomeHeader from "./HomeHeader";
import StatisticsHome from "./StatisticsHome";
import Settings from "./Settings";
import Items from "../assets/Hero Image@2x.png"


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
                         width: "930px"
                }}/>
                <HomeHeader/>
            </div>
            <StatisticsHome/>
            <Settings />
        </div>
    );
}

export default Home;