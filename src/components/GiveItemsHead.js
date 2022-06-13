import React from 'react';
import Navigation from "./Navigation";
import Decoration from "../assets/Decoration.svg";


function GiveItemsHead() {
    return (
        <div className="give-items">
            <div className="give-items__header">
                <Navigation/>
            </div>
            <div className="give-items__main">
                <h1>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h1>
                <div className="give-items__main--boxes">
                    <img src={Decoration} alt="decoration"/>
                    <h2>Wystarczą cztery proste kroki:</h2>
                    <div className="give-items__boxes">
                        <section>
                            <h3>1</h3>
                            <p>Wybierz rzeczy</p>
                            <div />
                        </section>
                        <section>
                            <h3>2</h3>
                            <p>Spakuj je w worki</p>
                            <div />
                        </section>
                        <section>
                            <h3>3</h3>
                            <p>Wybierz fundację</p>
                            <div />
                        </section>
                        <section>
                            <h3>4</h3>
                            <p>Zamów kuriera</p>
                            <div />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiveItemsHead;