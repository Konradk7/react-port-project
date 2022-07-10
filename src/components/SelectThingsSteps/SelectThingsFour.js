import React from 'react';

function SelectThingsFour({prev, next, street, city, postCode, hour, date, phone, comments}) {
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
                            <input type="text" name="street" onChange={street}/>
                        </section>
                        <section>
                            <label htmlFor="city">Miasto</label>
                            <input type="text" name="city" onChange={city}/>
                        </section>
                        <section>
                            <label htmlFor="post-code">Kod <p>pocztowy</p></label>
                            <input type="text" name="post-code" onChange={postCode}/>
                        </section>
                        <section>
                            <label htmlFor="phone-number">Numer <p>telefonu</p></label>
                            <input type="text" name="phone-number" onChange={phone}/>
                        </section>
                    </div>
                    <div>
                        <h5>Termin odbioru:</h5>
                        <section>
                            <label htmlFor="date">Data</label>
                            <input type="text" name="date" onChange={date}/>
                        </section>
                        <section>
                            <label htmlFor="hour">Godzina</label>
                            <input type="text" name="hour" onChange={hour}/>
                        </section>
                        <section>
                            <label htmlFor="note"><span style={{display: "block"}}>Uwagi </span>dla kuriera</label>
                            <textarea name="note" cols="27" rows="8" onChange={comments}></textarea>
                        </section>
                    </div>
                </div>
            </form>
            <div style={{marginTop: "-10px"}}>
                <button onClick={prev} style={{marginRight: "50px"}} className="select-things--btn">Wstecz</button>
                <button onClick={next} className="select-things--btn">Dalej</button>
            </div>
        </>
    );
}

export default SelectThingsFour;