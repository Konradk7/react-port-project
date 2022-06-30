import React from 'react';
import Shirt from "../assets/shirt@2x.png";
import Refresh from "../assets/refresh@2x.png";

function SelectThings() {
    return (
        <div className="select-things">
            <div className="select-things__container">
                {/*<h4 className="select-things--steps">Krok 1/4</h4>*/}
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
                {/*<button className="select-things--btn">Dalej</button>*/}

                {/*<h4 className="select-things--steps">Krok 2/4</h4>*/}
                {/*<h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>*/}
                {/*<form className="select-options__container">*/}
                {/*    <div>*/}
                {/*        <label htmlFor="select-bar" className="select-options__container--label">Liczba 60l worków:</label>*/}

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
                {/*<h4 className="select-things--steps">Krok 3/4</h4>*/}
                {/*<form className="select-options__container step-three">*/}
                {/*    <label htmlFor="select-bar" className="step-three--title">Lokalizacja:</label>*/}
                {/*    <div className="select-options__container--main step-three__header">*/}
                {/*        <select id="select-bar" defaultValue={"default"}>*/}
                {/*            <option value="default" disabled>-- wybierz --</option>*/}
                {/*            <option value="1">Poznań</option>*/}
                {/*            <option value="2">Warszawa</option>*/}
                {/*            <option value="3">Kraków</option>*/}
                {/*            <option value="4">Wrocław</option>*/}
                {/*            <option value="5">Katowice</option>*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*    <div className="step-three__container">*/}
                {/*        <h3>Komu chcesz pomóc?</h3>*/}
                {/*        <section className="step-three__container--buttons">*/}
                {/*            <button>dzieciom</button>*/}
                {/*            <button>samotnym matkom</button>*/}
                {/*            <button>bezdomnym</button>*/}
                {/*            <button>niepełnosprawnym</button>*/}
                {/*            <button>osobom starszym</button>*/}
                {/*        </section>*/}
                {/*        <section className="step-three__container--footer">*/}
                {/*            <label htmlFor="organization">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>*/}
                {/*            <input type="text" name="organization"/>*/}
                {/*        </section>*/}
                {/*    </div>*/}
                {/*</form>*/}
                {/*<button style={{marginRight: "50px"}} className="select-things--btn">Wstecz</button>*/}
                {/*<button className="select-things--btn">Dalej</button>*/}

                {/*<h4 className="select-things--steps">Krok 4/4</h4>*/}
                {/*<form className="select-options__container step-fourth">*/}
                {/*    <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>*/}
                {/*    <div className="step-fourth__container">*/}
                {/*        <div>*/}
                {/*            <h5>Adres odbioru:</h5>*/}
                {/*            <section>*/}
                {/*                <label htmlFor="street">Ulica</label>*/}
                {/*                <input type="text" name="street"/>*/}
                {/*            </section>*/}
                {/*            <section>*/}
                {/*                <label htmlFor="city">Miasto</label>*/}
                {/*                <input type="text" name="city"/>*/}
                {/*            </section>*/}
                {/*            <section>*/}
                {/*                <label htmlFor="post-code">Kod pocztowy</label>*/}
                {/*                <input type="text" name="post-code"/>*/}
                {/*            </section>*/}
                {/*            <section>*/}
                {/*                <label htmlFor="phone-number">Numer telefonu</label>*/}
                {/*                <input type="text" name="phone-number"/>*/}
                {/*            </section>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h5>Termin odbioru:</h5>*/}
                {/*            <section>*/}
                {/*                <label htmlFor="date">Data</label>*/}
                {/*                <input type="text" name="date"/>*/}
                {/*            </section>*/}
                {/*            <section>*/}
                {/*                <label htmlFor="hour">Godzina</label>*/}
                {/*                <input type="text" name="hour"/>*/}
                {/*            </section>*/}
                {/*            <section>*/}
                {/*                <label htmlFor="note"><span style={{display: "block"}}>Uwagi </span>dla kuriera</label>*/}
                {/*                <textarea name="note" cols="27" rows="8"></textarea>*/}
                {/*            </section>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</form>*/}
                {/*<button style={{marginRight: "50px"}} className="select-things--btn">Wstecz</button>*/}
                {/*<button className="select-things--btn">Dalej</button>*/}

                <h4 className="select-things--steps">Krok 4/4</h4>
                <form className="select-options__container">
                    <h3>Podsumowanie Twojej darowizny</h3>
                    <div>
                        <h4 className="subm">Oddajesz:</h4>
                        <img src={Shirt} alt="shirt" style={{width: "50px"}}/>
                        <p>4 worki, ubrania w dobrym stanie, dzieciom</p>
                        <img src={Refresh} alt="refresh" style={{width: "50px"}}/>
                        <p>dla lokalizacji: Warszawa</p>
                    </div>
                    <div className="step-fourth__container">
                        <div>
                            <h5>Adres odbioru:</h5>
                            <section>
                                <h6>Ulica</h6>
                                <p>Prosta 51</p>
                            </section>
                            <section>
                                <h6>Miasto</h6>
                                <p>Warszawa</p>
                            </section>
                            <section>
                                <h6>Kod pocztowy</h6>
                                <p>90-209</p>
                            </section>
                            <section>
                                <h6>Numer telefonu</h6>
                                <p>476 652 273</p>
                            </section>
                        </div>
                        <div>
                            <h5>Termin odbioru:</h5>
                            <section>
                                <h6>Data</h6>
                                <p>17.06.2022</p>
                            </section>
                            <section>
                                <h6>Godzina</h6>
                                <p>17:30</p>
                            </section>
                            <section>
                                <h6>Uwagi dla kuriera</h6>
                                <p></p>
                            </section>
                        </div>
                    </div>
                </form>
                <button style={{marginRight: "50px"}} className="select-things--btn">Wstecz</button>
                <button className="select-things--btn">Potwierdzam</button>

            </div>
        </div>
    );
}

export default SelectThings;