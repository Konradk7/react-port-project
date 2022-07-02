import React from 'react';

function SelectThingsOne() {
    return (
        <>
            <h4 className="select-things--steps">Krok 1/4</h4>
            <h2>Zaznacz co chcesz oddać:</h2>
            <form>
                <section>
                    <input type="checkbox" name="first-input"/>
                    <label htmlFor="first-input">ubrania, które nadają się do ponownego użycia</label>
                </section>
                <section>
                    <input type="checkbox" name="second-input"/>
                    <label htmlFor="second-input">ubrania, do wyrzucenia</label>
                </section>
                <section>
                    <input type="checkbox" name="third-input"/>
                    <label htmlFor="third-input">zabawki</label>
                </section>
                <section>
                    <input type="checkbox" name="fourth-input"/>
                    <label htmlFor="fourth-input">książki</label>
                </section>
                <section>
                    <input type="checkbox" name="fifth-input"/>
                    <label htmlFor="fifth-input">inne</label>
                </section>
            </form>
            <button className="select-things--btn">Dalej</button>
        </>
    );
}

export default SelectThingsOne;