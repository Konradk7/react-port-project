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
                <h4>Krok 2/4</h4>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                <form className="select-options__container">
                    <div>
                        <label htmlFor="select-bar">Liczba 60l worków:</label>

                        <select id="select-bar" defaultValue={"default"}>
                            <option value="default" disabled>-- wybierz --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="więcej">Więcej</option>
                        </select>
                    </div>

                </form>
                <button style={{marginRight: "50px"}}>Wstecz</button>
                <button>Dalej</button>
            </div>
        </div>
    );
}

export default SelectThings;