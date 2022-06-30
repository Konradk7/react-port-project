import React from 'react';
import {Link} from "react-router-dom";

function Alert() {
    return (
        <div className="alert">
            <div className="alert__container">
                <h2>Ważne!</h2>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
                    przekazać.</p>
                {/*<p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <Link to="/">TUTAJ</Link>.</p>*/}
                {/*<p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>*/}
                {/*<p>Podaj adres oraz termin odbioru rzeczy.</p>*/}
            </div>
        </div>
    );
}

export default Alert;