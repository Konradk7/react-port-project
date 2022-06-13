import React from 'react';

function SelectThings() {
    return (
        <div>
            <h4>Krok 1/4</h4>
            <h2>Zaznacz co chcesz oddać:</h2>
            <form>
                <input type="checkbox" name="first-input"/>
                <label htmlFor="first-input">ubrania, które nadają się do ponownego użycia</label>
                <input type="checkbox" name="second-input"/>
                <label htmlFor="second-input">ubrania, do wyrzucenia</label>
                <input type="checkbox" name="third-input"/>
                <label htmlFor="third-input">zabawki</label>
                <input type="checkbox" name="fourth-input"/>
                <label htmlFor="fourth-input">książki</label>
                <input type="checkbox" name="fifth-input"/>
                <label htmlFor="fifth-input">inne</label>
            </form>
            <button>Dalej</button>
        </div>
    );
}

export default SelectThings;