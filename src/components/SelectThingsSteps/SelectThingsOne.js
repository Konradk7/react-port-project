import React, {useState} from 'react';

function SelectThingsOne({next, clothes, badClothes, toys, books, another}) {


    return (
        <>
            <h4 className="select-things--steps">Krok 1/4</h4>
            <h2>Zaznacz co chcesz oddać:</h2>
            <form>
                <section>
                    <input type="checkbox" name="first-input" onClick={clothes}/>
                    <label htmlFor="first-input">ubrania, które nadają się do ponownego użycia</label>
                </section>
                <section>
                    <input type="checkbox" name="second-input" onClick={badClothes}/>
                    <label htmlFor="second-input">ubrania, do wyrzucenia</label>
                </section>
                <section>
                    <input type="checkbox" name="third-input" onClick={toys}/>
                    <label htmlFor="third-input">zabawki</label>
                </section>
                <section>
                    <input type="checkbox" name="fourth-input" onClick={books}/>
                    <label htmlFor="fourth-input">książki</label>
                </section>
                <section>
                    <input type="checkbox" name="fifth-input" onClick={another}/>
                    <label htmlFor="fifth-input">inne</label>
                </section>
            </form>
            <button className="select-things--btn" onClick={next}>Dalej</button>
        </>
    );
}

export default SelectThingsOne;