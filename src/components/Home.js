import React from 'react';
import Items from "../assets/Hero Image@2x.png"
import HomeHeader from "./HomeHeader";
import StatisticsHome from "./StatisticsHome";
import Settings from "./Settings";

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