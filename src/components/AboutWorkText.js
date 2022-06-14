import React from 'react';

function AboutWorkText(key, value, checked) {


    return (
        <>
            <p className="about-work__container--main">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <section>
                <div>
                    <h2>Organizacja “Lorem Ipsum 1”</h2>
                    <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                </div>
                <p>Egestas, sed, tempus</p>
            </section>
            <section>
                <div>
                    <h2>Organizacja “Lorem Ipsum 2”</h2>
                    <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                </div>
                <p>Ut, aliquam, purus, sit, amet</p>
            </section>
            <section>
                <div>
                    <h2>Organizacja “Lorem Ipsum 3”</h2>
                    <p>Scelerisque in dictum non consectetur a erat nam.</p>
                </div>
                <p>Mi, quis, hendrerit, dolor</p>
            </section>

        </>

    );
}

export default AboutWorkText;