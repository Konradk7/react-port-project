import React, {useState} from 'react';
import SelectThingsOne from "./SelectThingsSteps/SelectThingsOne";
import SelectThingsTwo from "./SelectThingsSteps/SelectThingsTwo";
import SelectThingsThree from "./SelectThingsSteps/SelectThingsThree";
import SelectThingsFour from "./SelectThingsSteps/SelectThingsFour";
import SelectThingsSubmit from "./SelectThingsSteps/SelectThingsSubmit";

function SelectThings() {
    const [step, setStep] = useState(1);
    const [submitForm, setSubmitForm] = useState({});

    const handleNextStep = () => {
        setStep(prevState => prevState + 1)
    }
    const handlePrevStep = () => {
        setStep(prevState => prevState - 1)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    let show;
    if(step === 1) {
        show = <SelectThingsOne next={handleNextStep}/>
    }  else if(step === 2) {
        show = <SelectThingsTwo next={handleNextStep} prev={handlePrevStep}/>
    } else if(step === 3) {
        show = <SelectThingsThree next={handleNextStep} prev={handlePrevStep}/>
    } else if(step === 4) {
        show = <SelectThingsFour next={handleNextStep} prev={handlePrevStep}/>
    } else if(step === 5) {
        show = <SelectThingsSubmit prev={handlePrevStep} submit={handleSubmit}/>
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