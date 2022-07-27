import React, {useEffect, useState} from 'react';
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

    const initialValues = { street: "", city: "", postCode: "", phone: "", date: "", hour: "", comments: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErr, setFormErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChangeFour = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    };

    useEffect(() => {
        console.log(formErr);
        if (Object.keys(formErr).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErr])
    const validate = (values) => {
        const errors = {};
        if(!values.street) {
            errors.street = "Podaj swoją ulicę!"
        }
        if(!values.city) {
            errors.city = "Podaj nazwę miasta!"
        }
        if(!values.postCode) {
            errors.postCode = "Podaj kod pocztowy!"
        }
        if(!values.phone) {
            errors.phone = "Podaj numer telefonu!"
        }
        if(!values.date) {
            errors.date = "Podaj datę odbioru!"
        }
        if (!values.hour) {
            errors.phone = "Podaj przybliżoną godzinę odbioru!"
        }
        return errors;
    }
    const handleSubmitFour = (e) => {
        e.preventDefault();
        setFormErr(validate(formValues));
        setIsSubmit(true)
    }
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
        setStep(prevState => prevState + 1);
        setSubmitForm({
            clothes,
            badClothes,
            toys,
            books,
            another,
            bags,
            localization,
            who,
            orgName,
            formValues
        })
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
            submit={handleSubmitFour}
            onChange={handleChangeFour}
            values={formValues}
            err={formErr}
            isSubmit={isSubmit}

        />
    } else if (step === 5) {
        show = <SelectThingsSubmit
            prev={handlePrevStep}
            next={handleNextStep}
            submit={handleSubmit}
            showItems={showItems}
            localization={localization}
            bags={bags}
            who={who}
            orgName={orgName}
            values={formValues}
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