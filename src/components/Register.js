import React, {useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";
import Decoration from "../assets/Decoration.svg";
import {auth} from "./Firebase";

function Register() {
    const initialValues = { email: "", password: "", confirmPassword: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErr, setFormErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [user, setUser] = useState({});
    const [err, setErr] = useState("");
    const [registered, setRegistered] = useState("");


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErr(validate(formValues));
        setIsSubmit(true)
    }
    useEffect(() => {
        console.log(formErr);
        if (Object.keys(formErr).length === 0 && isSubmit) {
            console.log(formValues);
        }
    },[formErr]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
        if (!values.email) {
            errors.email = "Email jest wymagany!"
        } else if (!regex.test(values.email)) {
            errors.email = "Błędna składnia emaila!"
        }
        if(!values.password) {
            errors.password = "Hasło jest wymagane!"
        } else if (values.password.length < 6) {
            errors.password = "Hasło musi być dłuższe niż 4 znaki!"
        } else if (values.password.length > 16) {
            errors.password = "Zbyt długie hasło!"
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Powtórz hasło!"
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Hasła nie zgadzają się ze sobą!"
        }
        return errors;
    }

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user)
            setRegistered("Pomyślnie zarejestrowano!")
        } catch (error) {
            console.log(error.message)
            const emailCond =
                "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
            if (registerEmail.trim()) {
                setErr( "Email nie może być pusty");
            } else if (registerEmail.match(emailCond)) {
                setErr("Proszę podaj poprawny adres email");
            } else {
                setErr( "");
            }
            if (registerEmail.length === 0) {
                setErr("Wpisz poprawny email");
            } else if (registerPassword.length <= 6) {
                setErr("Hasło jest zbyt krótkie");
            } else {
                setErr("Błąd!")
            }
        }
    }



    return (
        <div className="login">
            <div className="login--navigation">
                <Navigation/>
            </div>
            <div className="login__container">
                <div>
                    <h1>Załóż konto</h1>
                    <img src={Decoration} alt="decoration"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        name="email"
                        autoComplete="on"
                        // value={formValues.email}
                        onChange={(event) => {
                            setRegisterEmail(event.target.value)
                        }}

                    />
                    <label htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        name="password"
                        autoComplete="on"

                        onChange={(event) => {
                            setRegisterPassword(event.target.value)
                        }}
                    />
                    <label htmlFor="repeat-password">Powtórz hasło</label>
                    <input
                        type="password"
                        name="repeat-password"
                        autoComplete="on"
                    />
                    {err ? <div className="error-message">{err}</div> : ""}
                    {registered ? <div className="well-message">{registered}</div> : ""}
                </form>
                <div className="login__container--footer">
                    <Link to="/login">Zaloguj się</Link>
                    <button onClick={register}>Załóż konto</button>
                </div>
            </div>
        </div>
    );
}

export default Register;