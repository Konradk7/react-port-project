import React from 'react';

function SelectThingsTwo({prev, next, bags}) {
    return (
        <>
            <h4 className="select-things--steps">Krok 2/4</h4>
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <form className="select-options__container">
                <div>
                    <div className="select-options__container--main" style={{width: "500px"}}>
                        <label htmlFor="select-bar" className="select-options__container--label">Liczba 60l worków:</label>
                        <select id="select-bar" defaultValue={"default"}>
                            <option value="default" disabled>-- wybierz --</option>
                            <option value="1" onClick={() => bags(1)}>1</option>
                            <option value="2" onClick={() => bags(2)}>2</option>
                            <option value="3" onClick={() => bags(3)}>3</option>
                            <option value="4" onClick={() => bags(4)}>4</option>
                            <option value="5" onClick={() => bags(5)}>5</option>
                        </select>
                    </div>
                </div>

            </form>
            <button onClick={prev} className="select-things--btn" style={{marginRight: "50px", marginTop: "400px"}}>Wstecz</button>
            <button onClick={next} className="select-things--btn">Dalej</button>
        </>
    );
}

export default SelectThingsTwo;