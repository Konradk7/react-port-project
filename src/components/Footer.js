import React, {useState} from 'react';
import Decoration from "../assets/Decoration.svg";


function Footer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");

    const handleWriteName = e => {
        setName(e.target.value)
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handleChange = e => {
        if (!isValidEmail(e.target.value)) {
            setError("Email is invalid");
        } else {
            setError(null);
        }
        setEmail(e.target.value)
    }
    const handleSendMessage = e => {
        setMessage(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
    }


    return (
        <div className="footer__container" id="footer-form">
            <div className="footer__container--main">
                <div className="footer__container--header">
                    <h2>Skontaktuj się z nami</h2>
                    <img src={Decoration} alt="decoration"/>
                </div>
                <form>
                    <div className="footer-form__container">
                        <section>
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input type="text" placeholder="Krzysztof" name="name" value={name} onChange={handleWriteName}/>
                        </section>
                        <section>
                            <label htmlFor="email">Wpisz swój email</label>
                            <input type="email" id="email" placeholder="abc@xyz.pl" name="email" value={email} onChange={handleChange}/>
                            {error && <h2 style={{color: "red"}}>{error}</h2>}
                        </section>
                    </div>
                    <div className="footer-form__main">
                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea
                            value={message}
                            onChange={handleSendMessage}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            name="message"
                        />
                    </div>
                    <div className="footer-form__button">
                        <button onClick={handleSubmit}>Wyślij</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Footer;