import React from "react";
import "./Menu.css";
import Logoicon from "./SVG/Recurso 1.svg";


function Menu () {
    return(
        <>
        <div className="container_menu">
            <div className="a">
                <div className="logo" >
                    <img src={Logoicon} alt="Logo" />
                    <p>WebLink</p>
                </div>
            </div>
        </div>

          </>
    )
}

export default Menu;