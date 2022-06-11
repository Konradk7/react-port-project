import React from 'react';
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg";

function AboutUs(props) {
    return (
        <div className="about-us__container">
            <div>
                <h2>O nas</h2>
                <img src={Decoration} alt="decoration"/>
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato
                    quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
                    turnip greens parsnip.
                </p>
                <img src={Signature} alt="signature"/>
            </div>
            <img src={People} alt="people"/>
        </div>
    );
}

export default AboutUs;