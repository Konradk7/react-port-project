import React from 'react';

function SelectThingsThree({prev, next, localization, who, orgName}) {
    const handleCity = (e) => {
        localization(e.target.value)
    }
    return (
        <div>
            <h4 className="select-things--steps">Krok 3/4</h4>
            <form className="select-options__container step-three">
                <label htmlFor="select-bar" className="step-three--title">Lokalizacja:</label>
                <div className="select-options__container--main step-three__header">
                    <select id="select-bar" defaultValue={"default"}>
                        <option value="default" disabled>-- wybierz --</option>
                        <option value="Poznań" onClick={handleCity}>Poznań</option>
                        <option value="Warszawa" onClick={handleCity}>Warszawa</option>
                        <option value="Kraków" onClick={handleCity}>Kraków</option>
                        <option value="Wrocław" onClick={handleCity}>Wrocław</option>
                        <option value="Katowice" onClick={handleCity}>Katowice</option>
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
            <div style={{marginTop: "-102.5px"}}>
                <button onClick={prev} style={{marginRight: "50px"}} className="select-things--btn">Wstecz</button>
                <button onClick={next} className="select-things--btn">Dalej</button>
            </div>
        </div>
    );
}

export default SelectThingsThree;