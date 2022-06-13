import React from 'react';
import GiveItemsHead from "./GiveItemsHead";
import Alert from "./Alert";
import SelectThings from "./SelectThings";

function GiveItems() {
    return (
        <div>
            <GiveItemsHead />
            <Alert />
            <SelectThings />
        </div>
    );
}

export default GiveItems;