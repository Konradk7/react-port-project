import React from 'react';
import Decoration from '../assets/Decoration.svg';

function AboutWork() {
    return (
        <div>
            <h2>Komu pomagamy?</h2>
            <img src={Decoration} alt="decoration"/>
            <div>
                <a href="#">Fundacjom</a>
                <a href="#">Organizacjom pozarządowym</a>
                <a href="#">Lokalnym zbiórkom</a>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div>
                <div>
                    <h2>Organizacja “Lorem Ipsum 1”</h2>
                    <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                </div>
                <p>Egestas, sed, tempus</p>
            </div>
            <div>
                <div>
                    <h2>Organizacja “Lorem Ipsum 2”</h2>
                    <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                </div>
                <p>Ut, aliquam, purus, sit, amet</p>
            </div>
            <div>
                <div>
                    <h2>Organizacja “Lorem Ipsum 3”</h2>
                    <p>Scelerisque in dictum non consectetur a erat nam.</p>
                </div>
                <p>Mi, quis, hendrerit, dolor</p>
            </div>
            <a href="#">1</a>
            <a href="#">2</a>
        </div>
    );
}

export default AboutWork;