import React from 'react';
import HomeHeader from "./HomeHeader";
import StatisticsHome from "./StatisticsHome";
import Settings from "./Settings";
import Items from "../assets/Hero Image@2x.png"
import AboutUs from "./AboutUs";
import AboutWork from "./ AboutWork";
import Footer from "./Footer";
import Copyright from "./Copyright";


function Home() {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
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
            <Footer />
            <Copyright />
        </div>
    );
}

export default Home;