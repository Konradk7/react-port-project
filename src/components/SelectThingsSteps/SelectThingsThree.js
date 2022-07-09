import React, {useState} from 'react';

function SelectThingsThree({prev, next, localization, who, orgName}) {
    const [selectedOptions, setSelectedOption] = useState("");
    const [options, setOptions] = useState([
        {
            name: "dzieciom",
            id: "Dzieciom"
        },
        {
            name: "samotnym matkom",
            id: "Samotnym matkom"
        },
        {
            name: "bezdomnym",
            id: "Bezdomnym"
        },
        {
            name: "niepełnosprawnym",
            id: "Niepełnosprawnym"
        },
        {
            name: "osobom starszym",
            id: "Osobom starszym"
        }
    ])




    return (
        <div>
            <h4 className="select-things--steps">Krok 3/4</h4>
            <form className="select-options__container step-three">
                <label htmlFor="select-bar" className="step-three--title">Lokalizacja:</label>
                <div className="select-options__container--main step-three__header">
                    <select id="select-bar" defaultValue={"default"} onChange={localization}>
                        <option value="default" disabled>-- wybierz --</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </div>
                <div className="step-three__container">
                    <h3>Komu chcesz pomóc?</h3>
                    <section className="step-three__container--buttons">
                        <section>
                            {options.map(({name, id}) => {
                                return <div key={id}>{name}</div>
                            })}
                        </section>

                    </section>
                    <section className="step-three__container--footer">
                        <label htmlFor="organization">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                        <input type="text" name="organization" onChange={orgName}/>
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