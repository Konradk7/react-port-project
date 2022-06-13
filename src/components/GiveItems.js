import React from 'react';
import GiveItemsHead from "./GiveItemsHead";
import Alert from "./Alert";
import SelectThings from "./SelectThings";
import Footer from "./Footer";
import Copyright from "./Copyright";

function GiveItems() {
    return (
        <div>
            <GiveItemsHead />
            <Alert />
            <SelectThings />
            <Footer />
            <Copyright />
        </div>
    );
}

export default GiveItems;