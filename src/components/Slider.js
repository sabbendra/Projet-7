import React, { useState } from "react";
import "../css/slider.css";

function Slider ({ pictures }) {
    const [ current, setCurrent ] = useState(0);
    const length = pictures.length;

    const prev = () => {
        setCurrent (current === 0 ? length - 1 : current - 1);
    };

    const next = () => {
        setCurrent (current === length - 1 ? 0 : current + 1);
    };

    return (
        <div className="sliders">
            
            <img src = {pictures[current]} className="slideImage" alt="image slide"/>
            
            <div onClick={prev}  className="left"><i className="fa-sharp fa-solid fa-chevron-left"></i></div>
          
            <div onClick={next} className="right"><i className="fa-sharp fa-solid fa-chevron-right"></i></div>
         

        </div>
    )
}

export default Slider;