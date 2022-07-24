import React from "react";
import Logo from "../Components/Logo/Logo";
import "./HomePage.css"
import GridCards from "../GridCards/GridCards";
import Alerta from "../Alerta/Alerta";


function Home(){
    return(
        <>
        <div className="Container">
            <div className="logo"><Logo /></div>
      
            <div  className="Icons-div center-box">
            <Alerta />
            <GridCards />
            </div>
        </div>
        
        </>
    );
}


export default Home;