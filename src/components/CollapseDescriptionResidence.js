import React from 'react';
import { useState } from 'react';
import "../css/collapseResidence.css";

function CollapseResidence({ title, content }) {

    const [Open, setOpen] = useState(false); //l'accordéon est fermé au chargement de la page de base
    const toggle = () => {
        setOpen(isOpen => !isOpen);
    }
   
    return ( 
        <div className ="collapseResidenceDetail">
            <div className ="collapseItem">
 
                <div onClick={toggle} className="collapseTitle">
                
                    <h2>{ title }</h2>
                    
                    {Open ? 
                 <span><i className="fa-sharp fa-solid fa-chevron-down"></i></span>
        : 
                 <span><i className="fa-sharp fa-solid fa-chevron-up"></i></span>
            }
                
                </div>  
                <div className="collapseContent">{Open && content  }</div>
            </div>
        </div>
    );
    }

export default CollapseResidence;