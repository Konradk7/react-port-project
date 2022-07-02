import React from 'react';

function SelectThingsTwo() {
    return (
        <>
            <h4 className="select-things--steps">Krok 2/4</h4>
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <form className="select-options__container">
                <div>
                    <label htmlFor="select-bar" className="select-options__container--label">Liczba 60l worków:</label>

                    <select id="select-bar" defaultValue={"default"}>
                        <option value="default" disabled>-- wybierz --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

            </form>
            <button style={{marginRight: "50px", marginTop: "400px"}}>Wstecz</button>
            <button>Dalej</button>
        </>
    );
}

export default SelectThingsTwo;