import React from 'react';
import Navigation from "./Navigation";
import Decoration from "../assets/Decoration.svg";

function GiveItems() {
    return (
        <div className="give-items__header">
            <Navigation />
            <div>
                <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                <img src={Decoration} alt="decoration"/>
                <h2>Wystarczą cztery proste kroki:</h2>
                <div>
                    <h3>1</h3>
                    <p>Wybierz rzeczy</p>
                </div>
                <div>
                    <h3>2</h3>
                    <p>Spakuj je w worki</p>
                </div>
                <div>
                    <h3>3</h3>
                    <p>Wybierz fundację</p>
                </div>
                <div>
                    <h3>4</h3>
                    <p>Zamów kuriera</p>
                </div>
            </div>
        </div>
    );
}

export default GiveItems;