import React, {useState} from 'react';
import SelectThingsOne from "./SelectThingsSteps/SelectThingsOne";
import SelectThingsTwo from "./SelectThingsSteps/SelectThingsTwo";
import SelectThingsThree from "./SelectThingsSteps/SelectThingsThree";
import SelectThingsFour from "./SelectThingsSteps/SelectThingsFour";
import SelectThingsSubmit from "./SelectThingsSteps/SelectThingsSubmit";

function SelectThings() {
    const [step, setStep] = useState(1);

    let show;
    if(step === 1) {
        show = <SelectThingsOne step={step}/>
    }  else if(step === 2) {
        show = <SelectThingsTwo step={step}/>
    } else if(step === 3) {
        show = <SelectThingsThree step={step}/>
    } else if(step === 4) {
        show = <SelectThingsFour step={step}/>
    } else if(step === 5) {
        show = <SelectThingsSubmit step={step}/>
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