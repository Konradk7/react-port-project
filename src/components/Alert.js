import React from 'react';
import {Link} from "react-router-dom";

function Alert({steps}) {
    let showText;
    if (steps === 1) {
        showText = <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
            przekazać.</p>
    }
    if (steps === 2) {
        showText = <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy
            znajdziesz <Link to="/">TUTAJ</Link>.</p>
    }
    if (steps === 3) {
        showText =
            <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować
                organizacje po ich lokalizacji bądź celu ich pomocy.</p>
    }
    if (steps === 4) {
        showText = <p>Podaj adres oraz termin odbioru rzeczy.</p>

    }
    return (
        <div>
            {steps >= 5  ? "" :
            <div className="alert">
                <div className="alert__container">
                    <h2>Ważne!</h2>
                    {showText}
                </div>
            </div>}
        </div>
    );
}

export default Alert;