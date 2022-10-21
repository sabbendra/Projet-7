import React from "react";
import { useParams } from "react-router-dom";
import Logement from "../logements.json";
import "../css/residenceDetails.css";

function ResidenceDetails () {
    const { id } = useParams();
    const residence = Logement.find ((item) => item.id === id);
    const starColor = {
        red: "#ff6060",
        grey: "#E3E3E3",
      };

const stars = Array(5).fill(0);

return (
  <div className="residenceContainer">

    <div className="details">
        <h2 className="residenceTitle">{residence.title}</h2>
            <span className="location">{residence.location}</span>

        <div className='residenceTags'>
            {residence.tags.map((tag) => (
                <div className='tag' key={tag}>
                    {tag}
                </div>
                    ))}
        </div>
    </div>

    <div className="rating">
        <div className="host">
            <span className='hostName'>{residence.host.name}</span>
        <img className='hostProfil' alt='house' src={residence.host.picture} />
        </div>

      <div className="rating">

        <div className="stars">
          {stars.map((_, index) => (
             < fa-solid fa-star-sharp
             key={index}
    
              color={residence.rating > index ? starColor.red : starColor.grey}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
};


export default ResidenceDetails
