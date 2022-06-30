import React from 'react';

function SelectThings() {
    return (
        <div className="select-things">
            <div className="select-things__container">
                {/*<h4>Krok 1/4</h4>*/}
                {/*<h2>Zaznacz co chcesz oddać:</h2>*/}
                {/*<form>*/}
                {/*    <section>*/}
                {/*        <input type="checkbox" name="first-input"/>*/}
                {/*        <label htmlFor="first-input">ubrania, które nadają się do ponownego użycia</label>*/}
                {/*    </section>*/}
                {/*    <section>*/}
                {/*        <input type="checkbox" name="second-input"/>*/}
                {/*        <label htmlFor="second-input">ubrania, do wyrzucenia</label>*/}
                {/*    </section>*/}
                {/*    <section>*/}
                {/*        <input type="checkbox" name="third-input"/>*/}
                {/*        <label htmlFor="third-input">zabawki</label>*/}
                {/*    </section>*/}
                {/*    <section>*/}
                {/*        <input type="checkbox" name="fourth-input"/>*/}
                {/*        <label htmlFor="fourth-input">książki</label>*/}
                {/*    </section>*/}
                {/*    <section>*/}
                {/*        <input type="checkbox" name="fifth-input"/>*/}
                {/*        <label htmlFor="fifth-input">inne</label>*/}
                {/*    </section>*/}
                {/*</form>*/}
                {/*<button>Dalej</button>*/}
                {/*<h4>Krok 2/4</h4>*/}
                {/*<h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>*/}
                {/*<form className="select-options__container">*/}
                {/*    <div>*/}
                {/*        <label htmlFor="select-bar">Liczba 60l worków:</label>*/}

                {/*        <select id="select-bar" defaultValue={"default"}>*/}
                {/*            <option value="default" disabled>-- wybierz --</option>*/}
                {/*            <option value="1">1</option>*/}
                {/*            <option value="2">2</option>*/}
                {/*            <option value="3">3</option>*/}
                {/*            <option value="4">4</option>*/}
                {/*            <option value="5">5</option>*/}
                {/*        </select>*/}
                {/*    </div>*/}

                {/*</form>*/}
                {/*<button style={{marginRight: "50px", marginTop: "400px"}}>Wstecz</button>*/}
                {/*<button>Dalej</button>*/}
                <h4>Krok 3/4</h4>
                <form className="select-options__container">
                    <label htmlFor="select-bar">Lokalizacja</label>
                    <div className="select-options__container--main">
                        <select id="select-bar" defaultValue={"default"}>
                            <option value="default" disabled>-- wybierz --</option>
                            <option value="1">Poznań</option>
                            <option value="2">Warszawa</option>
                            <option value="3">Kraków</option>
                            <option value="4">Wrocław</option>
                            <option value="5">Katowice</option>
                        </select>
                    </div>
                    <h3>Komu chcesz pomóc?</h3>
                    <section>
                        <button>dzieciom</button>
                        <button>samotnym matkom</button>
                        <button>bezdomnym</button>
                        <button>niepełnosprawnym</button>
                        <button>osobom starszym</button>
                    </section>
                    <section>
                        <label htmlFor="organization">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                        <input type="text" name="organization"/>
                    </section>
                </form>
                <button style={{marginRight: "50px"}}>Wstecz</button>
                <button>Dalej</button>
            </div>
        </div>
    );
}

export default SelectThings;