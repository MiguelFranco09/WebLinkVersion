import React from "react";
import "./Cards.css";
// import Icon from "./archivos2.png";


function Card({title, image, link}){
    
    
    return(
       
           
              <section>
                    <div className="card">
                        <div className="container_card">
                            <img className="image_card" src={image} alt="icono" />
                                <div className="effecthover_card">
                                </div>
                                    <h3 className="title_card">{title}</h3>
                                    <a href={link} target="_blank">
                                        <div className="button_link_card">
                                            <h3>Link</h3>
                                        </div>
                                    </a>
                        </div>
                   </div>
              </section>
           
        
    ) 
}

export default Card