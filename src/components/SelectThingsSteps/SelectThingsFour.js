import React, {useEffect, useState} from 'react';

function SelectThingsFour({prev, next, submit, onChange, values}) {

    return (
        <>
            <h4 className="select-things--steps">Krok 4/4</h4>
            <form className="select-options__container step-fourth" onSubmit={submit}>
                <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
                <div className="step-fourth__container">
                    <div>
                        <h5>Adres odbioru:</h5>
                        <section>
                            <label htmlFor="street" className="step-fourth__container--label">Ulica</label>
                            <input type="text" name="street" onChange={onChange} minLength={3} value={values.street}/>
                        </section>
                        <section>
                            <label htmlFor="city" className="step-fourth__container--label">Miasto</label>
                            <input type="text" name="city" onChange={onChange} value={values.city}/>
                        </section>
                        <section>
                            <label htmlFor="post-code" className="step-fourth__container--label">Kod <p>pocztowy</p>
                            </label>
                            <input type="text" name="postCode" onChange={onChange} value={values.postCode}/>
                        </section>
                        <section>
                            <label htmlFor="phone-number"
                                   className="step-fourth__container--label">Numer <p>telefonu</p></label>
                            <input type="text" name="phone" onChange={onChange} value={values.phone}/>
                        </section>
                    </div>
                    <div>
                        <h5>Termin odbioru:</h5>
                        <section>
                            <label htmlFor="date" className="step-fourth__container--label">Data</label>
                            <input type="text" name="date" onChange={onChange} value={values.date}/>
                        </section>
                        <section>
                            <label htmlFor="hour" className="step-fourth__container--label">Godzina</label>
                            <input type="text" name="hour" onChange={onChange} value={values.hour}/>
                        </section>
                        <section>
                            <label htmlFor="note" className="step-fourth__container--label"><span
                                style={{display: "block"}}>Uwagi </span>dla kuriera</label>
                            <textarea name="note" cols="27" rows="8" onChange={onChange} value={values.comments}></textarea>
                        </section>
                    </div>
                </div>
            </form>
            <div style={{marginTop: "-10px"}}>
                <button onClick={prev} style={{marginRight: "50px"}} className="select-things--btn step-four--button">Wstecz</button>
                <button onClick={next} className="select-things--btn step-four--button" type="submit">Dalej</button>
            </div>
        </>
    );
}

export default SelectThingsFour;