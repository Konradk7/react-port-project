import React, {useEffect, useState} from 'react';

function SelectThingsFour({prev, next, street, city, postCode, hour, date, phone, comments}) {
    const [err, setErr] = useState(true);
    useEffect(() => {
        if (street.length  !== 0) {
            setErr(false)
        }
    }, [])
    return (
        <>
            <h4 className="select-things--steps">Krok 4/4</h4>
            <form className="select-options__container step-fourth">
                <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
                <div className="step-fourth__container">
                    <div>
                        <h5>Adres odbioru:</h5>
                        <section>
                            <label htmlFor="street" className="step-fourth__container--label">Ulica</label>
                            <input type="text" name="street" onChange={street} minLength={3}/>
                        </section>
                        <section>
                            <label htmlFor="city" className="step-fourth__container--label">Miasto</label>
                            <input type="text" name="city" onChange={city}/>
                        </section>
                        <section>
                            <label htmlFor="post-code" className="step-fourth__container--label">Kod <p>pocztowy</p>
                            </label>
                            <input type="text" name="post-code" onChange={postCode}/>
                        </section>
                        <section>
                            <label htmlFor="phone-number"
                                   className="step-fourth__container--label">Numer <p>telefonu</p></label>
                            <input type="text" name="phone-number" onChange={phone}/>
                        </section>
                    </div>
                    <div>
                        <h5>Termin odbioru:</h5>
                        <section>
                            <label htmlFor="date" className="step-fourth__container--label">Data</label>
                            <input type="text" name="date" onChange={date}/>
                        </section>
                        <section>
                            <label htmlFor="hour" className="step-fourth__container--label">Godzina</label>
                            <input type="text" name="hour" onChange={hour}/>
                        </section>
                        <section>
                            <label htmlFor="note" className="step-fourth__container--label"><span
                                style={{display: "block"}}>Uwagi </span>dla kuriera</label>
                            <textarea name="note" cols="27" rows="8" onChange={comments}></textarea>
                        </section>
                    </div>
                </div>
            </form>
            <div style={{marginTop: "-10px"}}>
                <button onClick={prev} style={{marginRight: "50px"}}
                        className="select-things--btn step-four--button">Wstecz
                </button>
                <button onClick={next} disabled={err} className="select-things--btn step-four--button">Dalej</button>
            </div>
        </>
    );
}

export default SelectThingsFour;