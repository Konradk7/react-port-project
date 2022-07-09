import React from 'react';
import Decoration from "../../assets/Decoration.svg";

function SelectThingsEnd() {
    return (
        <div className="select-things__container--end">
            <div>
                <h2>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</h2>
                <img src={Decoration} alt="decoration"/>
            </div>
        </div>
    );
}

export default SelectThingsEnd;