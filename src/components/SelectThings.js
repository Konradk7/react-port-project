import React from 'react';
import SelectThingsOne from "./SelectThingsSteps/SelectThingsOne";
import SelectThingsTwo from "./SelectThingsSteps/SelectThingsTwo";
import SelectThingsThree from "./SelectThingsSteps/SelectThingsThree";
import SelectThingsFour from "./SelectThingsSteps/SelectThingsFour";
import SelectThingsSubmit from "./SelectThingsSteps/SelectThingsSubmit";

function SelectThings() {
    return (
        <div className="select-things">
            <div className="select-things__container">
                <SelectThingsOne />
                {/*<SelectThingsTwo />*/}
                {/*<SelectThingsThree />*/}
                {/*<SelectThingsFour />*/}
                {/*<SelectThingsSubmit />*/}




            </div>
        </div>
    );
}

export default SelectThings;