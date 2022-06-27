import React, {useState} from 'react';
import AboutWorkText from "./AboutWorkText";
import Decoration from '../assets/Decoration.svg';


function AboutWork() {
    const [state, setState] = useState(2);

    return (
        <div className="about-work__container" id="about-work">
            <h2 className="about-work__container--title">Komu pomagamy?</h2>
            <img src={Decoration} alt="decoration" className="about-work__container--decoration"/>
            <div className="about-work__container--links">
                <h3 onClick={() => {setState(1)}}>Fundacjom</h3>
                <h3 style={{display: "flex", flexDirection: "column"}} onClick={() => {setState(2)}}><span>Organizacjom</span>
                    <span>pozarządowym</span></h3>
                <h3 style={{display: "flex", flexDirection: "column"}} onClick={() => {setState(3)}}><span>Lokalnym</span>
                    <span>zbiórkom</span></h3>
            </div>
            <AboutWorkText state={state}/>

        </div>
    );
}

export default AboutWork;