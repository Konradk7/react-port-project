import React from 'react';
import HomeHeader from "./HomeHeader";
import Items from "../assets/Hero Image@2x.png"

function Home(props) {
    return (
        <div>
            {/*<img src={Items} alt="items" style={{height: "700px", position: "relative", left: "-350px"}}/>*/}
            <HomeHeader />
        </div>
    );
}

export default Home;