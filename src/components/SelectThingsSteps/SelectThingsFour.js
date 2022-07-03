import React from 'react';

function SelectThingsFour({prev, next}) {
    return (
        <>
            <h4 className="select-things--steps">Krok 4/4</h4>
            <form className="select-options__container step-fourth">
                <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
                <div className="step-fourth__container">
                    <div>
                        <h5>Adres odbioru:</h5>
                        <section>
                            <label htmlFor="street">Ulica</label>
                            <input type="text" name="street"/>
                        </section>
                        <section>
                            <label htmlFor="city">Miasto</label>
                            <input type="text" name="city"/>
                        </section>
                        <section>
                            <label htmlFor="post-code">Kod pocztowy</label>
                            <input type="text" name="post-code"/>
                        </section>
                        <section>
                            <label htmlFor="phone-number">Numer telefonu</label>
                            <input type="text" name="phone-number"/>
                        </section>
                    </div>
                    <div>
                        <h5>Termin odbioru:</h5>
                        <section>
                            <label htmlFor="date">Data</label>
                            <input type="text" name="date"/>
                        </section>
                        <section>
                            <label htmlFor="hour">Godzina</label>
                            <input type="text" name="hour"/>
                        </section>
                        <section>
                            <label htmlFor="note"><span style={{display: "block"}}>Uwagi </span>dla kuriera</label>
                            <textarea name="note" cols="27" rows="8"></textarea>
                        </section>
                    </div>
                </div>
            </form>
            <button onClick={prev} style={{marginRight: "50px"}} className="select-things--btn">Wstecz</button>
            <button onClick={next} className="select-things--btn">Dalej</button>
        </>
    );
}

export default SelectThingsFour;