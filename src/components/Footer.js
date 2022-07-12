import React from 'react';
import Decoration from "../assets/Decoration.svg";


function Footer() {
    const nodemailer = require("nodemailer");
    async function main() {
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
    }
    main().catch(console.error);


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
                            <input type="text" placeholder="Krzysztof" name="name"/>
                        </section>
                        <section>
                            <label htmlFor="email">Wpisz swój email</label>
                            <input type="email" placeholder="abc@xyz.pl" name="email"/>
                        </section>
                    </div>
                    <div className="footer-form__main">
                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            name="message"
                        />
                    </div>
                    <div className="footer-form__button">
                        <button>Wyślij</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Footer;