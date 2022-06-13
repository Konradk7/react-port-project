import React from 'react';

function SelectThings() {
    return (
        <div className="select-things">
            <div className="select-things__container">
                <h4>Krok 1/4</h4>
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
                <button>Dalej</button>
            </div>
        </div>
    );
}

export default SelectThings;