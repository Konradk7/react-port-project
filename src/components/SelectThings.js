import React, {useState} from 'react';
import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import SelectThingsOne from "./SelectThingsSteps/SelectThingsOne";
import SelectThingsTwo from "./SelectThingsSteps/SelectThingsTwo";
import SelectThingsThree from "./SelectThingsSteps/SelectThingsThree";
import SelectThingsFour from "./SelectThingsSteps/SelectThingsFour";
import SelectThingsSubmit from "./SelectThingsSteps/SelectThingsSubmit";
import SelectThingsEnd from "./SelectThingsSteps/SelectThingsEnd";
import Alert from "./Alert";

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
    const [who, setWho] = useState("wszystkim potrzebującym");
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

    const handleBags = (e) => {
        const selectedBags = e.target.value;
        setBags(selectedBags)
    }
    const handleLocalization = (e) => {
        const selectedLoc = e.target.value;
        setLocalization(selectedLoc)
    }
    const handleSelectWho = (e) => {
        setWho(e.target.value)
    }
    const handleOrgName = (e) => {
        setOrgName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        setStep(prevState => prevState + 1)

    }
    let showItems;
    if (clothes) {
        showItems = "ubrania w dobrym stanie"
    } else if (badClothes) {
        showItems = "ubrania w złym stanie"
    } else if (toys) {
        showItems = "zabawki"
    } else if (books) {
        showItems = "książki"
    } else if (another) {
        showItems = "różne rzeczy"
    }

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
            who={handleSelectWho}
            orgName={handleOrgName}
        />
    } else if (step === 4) {
        show = <SelectThingsFour
            next={handleNextStep}
            prev={handlePrevStep}
            street={(e) => setStreet(e.target.value)}
            city={(e) => setCity(e.target.value)}
            postCode={(e) => setPostCode(e.target.value)}
            phone={(e) => setPhone(e.target.value)}
            hour={(e) => setHour(e.target.value)}
            date={(e) => setDate(e.target.value)}
            comments={(e) => setComments(e.target.value)}
        />
    } else if (step === 5) {
        show = <SelectThingsSubmit
            prev={handlePrevStep}
            submit={handleSubmit}
            // clothes={clothes}
            // badClothes={badClothes}
            // toys={toys}
            // books={books}
            // another={another}
            showItems={showItems}
            localization={localization}
            bags={bags}
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
    } else if (step === 6) {
        show = <SelectThingsEnd/>
    }
    return (
        <div>
            <Alert steps={step} />
            <div className="select-things">
                <div className="select-things__container">
                    {show}
                </div>
            </div>
        </div>
    );
}

export default SelectThings;