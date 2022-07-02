import React from 'react';
import Shirt from "../../assets/shirt@2x.png";
import Refresh from "../../assets/refresh@2x.png";

function SelectThingsSubmit() {
    return (
        <>
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
            <button type="submit" className="select-things--btn">Potwierdzam</button>
        </>
    );
}

export default SelectThingsSubmit;