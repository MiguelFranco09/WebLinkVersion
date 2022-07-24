import React from "react";
import Logoimg from "./Logo.svg"
import "./Logo.css"

function Logo() {

    return(
        <img className="cont-logo" src={Logoimg} alt="Logo WebLink"></img>
    );

};

export default Logo;