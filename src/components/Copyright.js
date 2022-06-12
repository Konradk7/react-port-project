import React from 'react';
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";

function Copyright() {
    return (
        <div className="copyright">
            <div className="copyright__container">
                <p>Copyright by Coders Lab</p>
                <div>
                    <img src={Facebook} alt="facebook icon"/>
                    <img src={Instagram} alt="instagram icon"/>
                </div>
            </div>
        </div>
    );
}

export default Copyright;