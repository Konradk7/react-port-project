import React, {useState} from 'react';
import SelectThingsOne from "./SelectThingsSteps/SelectThingsOne";
import SelectThingsTwo from "./SelectThingsSteps/SelectThingsTwo";
import SelectThingsThree from "./SelectThingsSteps/SelectThingsThree";
import SelectThingsFour from "./SelectThingsSteps/SelectThingsFour";
import SelectThingsSubmit from "./SelectThingsSteps/SelectThingsSubmit";

function SelectThings() {
    const [step, setStep] = useState(1);
    const [submitForm, setSubmitForm] = useState({});

    const [clothes, setClothes] = useState(false);
    const [badClothes, setBadClothes] = useState(false);
    const [toys, setToys] = useState(false);
    const [books, setBooks] = useState(false);
    const [another, setAnother] = useState(false);

    const [bags, setBags] = useState(null);

    const [localization, setLocalization] = useState("");
    const [who, setWho] = useState("");
    const [orgName, setOrgName] = useState("");

    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [comments, setComments] = useState("");


    const handleNextStep = () => {
        setStep(prevState => prevState + 1)
    }
    const handlePrevStep = () => {
        setStep(prevState => prevState - 1)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    const handleBags = (e) => {
        const selectedBags = e.target.value;
        setBags(selectedBags)
    }
    const handleLocalization = (e) => {
        const selectedLoc = e.target.value;
        setLocalization(selectedLoc)
    }
    // const handleForWho = (e) => {
    //     e.preventDefault();
    //     setWho(getCurrentContent)
    // }

    let show;
    if (step === 1) {
        show = <SelectThingsOne
            next={handleNextStep}
            clothes={() => setClothes(!clothes)}
            badClothes={() => setBadClothes(!badClothes)}
            toys={() => setToys(!toys)}
            books={() => setBooks(!books)}
            another={() => setAnother(!another)}
        />
    } else if (step === 2) {
        show = <SelectThingsTwo next={handleNextStep} prev={handlePrevStep} bags={handleBags}/>
    } else if (step === 3) {
        show = <SelectThingsThree
            next={handleNextStep}
            prev={handlePrevStep}
            localization={handleLocalization}
            who={setWho}
            orgName={setOrgName}
        />
    } else if (step === 4) {
        show = <SelectThingsFour
            next={handleNextStep}
            prev={handlePrevStep}
            street={street}
            city={city}
            postCode={postCode}
            phone={phone}
            hour={hour}
            date={date}
            comments={comments}
        />
    } else if (step === 5) {
        show = <SelectThingsSubmit
            prev={handlePrevStep}
            submit={handleSubmit}
            clothes={clothes}
            badClothes={badClothes}
            toys={toys}
            books={books}
            another={another}
            localization={localization}
            who={who}
            orgName={orgName}
            street={street}
            city={city}
            postCode={postCode}
            phone={phone}
            hour={hour}
            date={date}
            comments={comments}
        />
    }

    return (
        <div className="select-things">
            <div className="select-things__container">
                {show}
            </div>
        </div>
    );
}

export default SelectThings;