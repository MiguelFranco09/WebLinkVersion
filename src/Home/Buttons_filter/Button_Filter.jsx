import React from "react";
import "./Button_Filter.css"

function Button_Filter (){
    return (
        <div className="container_button_filter">
           
               <a href="/"> <div className="button_filter"><p>ALL</p></div></a>
               <a href="/"> <div className="button_filter"><p>CURSO</p></div></a>
               <a href="/"> <div className="button_filter"><p>PROGRAMAS</p></div></a>
               <a href="/"> <div className="button_filter"><p>JUEGOS</p></div></a>
                
        </div>
    )
}

export default Button_Filter