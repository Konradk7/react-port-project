import React from 'react';
import {Link} from "react-router-dom";
import Decoration from "../assets/Decoration.svg";
import Package from "../assets/package@2x.png";
import Refresh from "../assets/refresh@2x.png";
import Shirt from "../assets/shirt@2x.png";
import Zoom from "../assets/zoom@2x.png";

function Settings() {
    return (
        <div className="settings__container" id="settings">

            <div>
                <h2 className="settings__container--title">Wystarczą 4 proste kroki</h2>
                <img className="settings__container--decoration" src={Decoration} alt="decoration"/>
            </div>

            <div className="settings__container--elements">
                <section>
                    <img src={Shirt} alt="shirt"/>
                    <h4>Wybierz rzeczy</h4>
                    <div></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </section>

                <section>
                    <img src={Package} alt="package"/>
                    <h4>Spakuj je</h4>
                    <div></div>
                    <p>skorzystaj z worków na śmieci</p>
                </section>

                <section>
                    <img src={Zoom} alt="zoom"/>
                    <h4>Zdecyduj komu chcesz pomóc</h4>
                    <div></div>
                    <p>wybierz zaufane miejsce</p>
                </section>

                <section>
                    <img src={Refresh} alt="refresh"/>
                    <h4>Zamów kuriera</h4>
                    <div></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </section>

            </div>

            <Link to="/give-items" className="settings__container--footer" >Oddaj rzeczy</Link>
        </div>
    );
}

export default Settings;