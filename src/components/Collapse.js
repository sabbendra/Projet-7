import React from 'react';
import { useState } from 'react';
import "../css/collapse.css";


function Collapse({ title, content }) {

    const [Open, setOpen] = useState(false); //l'accordéon est fermé au chargement de la page de base

    const toggle = () => {
        setOpen(true);
    }

    const toggledeux = () => {
        setOpen(false);
    }

    return ( 
        <div className ="collapseAbout">
            <div className ="collapseItem">
 {/* si open est false donc fermé, alors on execuute */}
                {!Open ?
                <div onClick={toggle} className="collapseTitle">
                
                    <h2>{ title }</h2>

                    {/* si open est true alors tu m'affiches le moins et sinon (:) tu affiches + */}
            
                    <span><i className="fa-sharp fa-solid fa-chevron-down"></i></span>
                
                </div> 

                 : 

// sinon on execute ce code  

                 <div onClick={toggledeux} className="collapseTitle">
                
                 <h2>{ title }</h2>

                 {/* si open est true alors tu m'affiches le moins et sinon (:) tu affiches + */}
                 <span><i className="fa-solid fa-chevron-up"></i></span> 
                 </div> }
                </div>
                
           <div className="collapseContent">{Open && content  }</div>
           {/* <div>{Open ? content : null }</div> */}
          
        </div>
    
    );
    }

export default Collapse;

