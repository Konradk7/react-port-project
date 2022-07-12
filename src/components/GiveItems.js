import React from 'react';
import GiveItemsHead from "./GiveItemsHead";
import Alert from "./Alert";
import SelectThings from "./SelectThings";
import Footer from "./Footer";
import Copyright from "./Copyright";

function GiveItems({logout, user}) {
    return (
        <div >
            <GiveItemsHead logout={logout} user={user}/>
            <SelectThings />
            <Footer />
            <Copyright />
        </div>
    );
}

export default GiveItems;