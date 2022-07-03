import React from 'react';

function SelectThingsThree({prev, next}) {
    return (
        <div>
            <h4 className="select-things--steps">Krok 3/4</h4>
            <form className="select-options__container step-three">
                <label htmlFor="select-bar" className="step-three--title">Lokalizacja:</label>
                <div className="select-options__container--main step-three__header">
                    <select id="select-bar" defaultValue={"default"}>
                        <option value="default" disabled>-- wybierz --</option>
                        <option value="1">Poznań</option>
                        <option value="2">Warszawa</option>
                        <option value="3">Kraków</option>
                        <option value="4">Wrocław</option>
                        <option value="5">Katowice</option>
                    </select>
                </div>
                <div className="step-three__container">
                    <h3>Komu chcesz pomóc?</h3>
                    <section className="step-three__container--buttons">
                        <button>dzieciom</button>
                        <button>samotnym matkom</button>
                        <button>bezdomnym</button>
                        <button>niepełnosprawnym</button>
                        <button>osobom starszym</button>
                    </section>
                    <section className="step-three__container--footer">
                        <label htmlFor="organization">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                        <input type="text" name="organization"/>
                    </section>
                </div>
            </form>
            <button onClick={prev} style={{marginRight: "50px"}} className="select-things--btn">Wstecz</button>
            <button onClick={next} className="select-things--btn">Dalej</button>
        </div>
    );
}

export default SelectThingsThree;