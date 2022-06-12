import React from 'react';
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";

function Footer() {
    return (
        <div>
            <div>
                <h2>Skontaktuj się z nami</h2>
                <img src={Decoration} alt="decoration"/>
            </div>
            <form>
                <div>
                    <div>
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <input type="text" placeholder="Krzysztof" name="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Wpisz swój email</label>
                        <input type="email" placeholder="abc@xyz.pl" name="email"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <input
                        type="text"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        name="message"
                    />
                </div>
                <button>Wyślij</button>
            </form>
            <div>
                <p>Copyright by Coders Lab</p>
                <img src={Facebook} alt="facebook icon"/>
                <img src={Instagram} alt="instagram icon"/>
            </div>
        </div>
    );
}

export default Footer;