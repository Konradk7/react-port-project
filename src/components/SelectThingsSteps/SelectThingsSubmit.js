import React from 'react';
import Shirt from "../../assets/shirt@2x.png";
import Refresh from "../../assets/refresh@2x.png";

function SelectThingsSubmit({
                                prev,
                                submit,
                                localization,
                                who,
                                orgName,
                                street,
                                city,
                                postCode,
                                phone,
                                hour,
                                date,
                                comments,
                                bags,
                                showItems,
                                next
                            }) {
    return (
        <>
            <form className="select-options__container select-submit--header" onSubmit={submit}>
                <h3>Podsumowanie Twojej darowizny</h3>
                <div>
                    <h4>Oddajesz:</h4>
                    <div className="select-submit--title">
                        <img src={Shirt} alt="shirt"/>
                        <p>{bags} worki, {showItems}, {who}</p>
                    </div>
                    <div className="select-submit--title">
                        <img src={Refresh} alt="refresh"/>
                        <p>dla lokalizacji: {localization}</p>
                    </div>
                </div>
                <div className="step-fourth__container submit">
                    <div>
                        <h5>Adres odbioru:</h5>
                        <section>
                            <h6>Ulica</h6>
                            <p>{street}</p>
                        </section>
                        <section>
                            <h6>Miasto</h6>
                            <p>{city}</p>
                        </section>
                        <section>
                            <h6 className="step-fourth__container--constrict">Kod pocztowy</h6>
                            <p>{postCode}</p>
                        </section>
                        <section>
                            <h6 className="step-fourth__container--constrict">Numer telefonu</h6>
                            <p>{phone}</p>
                        </section>
                    </div>
                    <div style={{marginRight: "200px"}}>
                        <h5>Termin odbioru:</h5>
                        <section>
                            <h6>Data</h6>
                            <p>{date}</p>
                        </section>
                        <section>
                            <h6>Godzina</h6>
                            <p>{hour}</p>
                        </section>
                        <section>
                            <h6>Uwagi dla kuriera</h6>
                            <p>{comments}</p>
                        </section>
                    </div>
                </div>
                <div className="select-things__buttons" style={{display: "flex"}}>
                    <button onClick={prev} style={{marginRight: "50px"}} className="select-things__buttons--btn submit--btn">Wstecz</button>
                    <button type="submit" className="select-things__buttons--btn submit--btn" onClick={next}>Potwierdzam</button>
                </div>
            </form>

        </>
    );
}

export default SelectThingsSubmit;