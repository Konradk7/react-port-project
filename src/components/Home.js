import React from 'react';
import HomeHeader from "./HomeHeader";
import StatisticsHome from "./StatisticsHome";
import Settings from "./Settings";
import AboutUs from "./AboutUs";
import AboutWork from "./ AboutWork";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Items from "../assets/Hero-Image@2x.png"


function Home({user, logout}) {
    return (
        <div>
            <div className="home__container">
                <img src={Items}
                     alt="items"
                     style={{
                         height: "800px",
                         position: "relative",
                         left: "-320px",
                         width: "900px"
                }}/>
                <HomeHeader user={user} logout={logout}/>
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