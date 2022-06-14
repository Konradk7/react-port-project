import React, {useState} from 'react';
import AboutWorkText from "./AboutWorkText";
import Decoration from '../assets/Decoration.svg';


function AboutWork() {
    const [selected, setSelected] = useState(
        [
            {value: 'foundations', checked: false},
            {value: 'organizations', checked: true},
            {value: 'local', checked: false},
        ]
    );

    const handleButton = e => {
        setSelected(e.target.id)
    }

    return (
        <div className="about-work__container">
            <h2 className="about-work__container--title">Komu pomagamy?</h2>
            <img src={Decoration} alt="decoration" className="about-work__container--decoration"/>
            <div className="about-work__container--links">
                <h3 onClick={handleButton}>Fundacjom</h3>
                <h3 style={{display: "flex", flexDirection: "column"}} onClick={handleButton}><span>Organizacjom</span>
                    <span>pozarządowym</span></h3>
                <h3 style={{display: "flex", flexDirection: "column"}} onClick={handleButton}><span>Lokalnym</span>
                    <span>zbiórkom</span></h3>
            </div>
            <AboutWorkText />
        </div>
    );
}

export default AboutWork;