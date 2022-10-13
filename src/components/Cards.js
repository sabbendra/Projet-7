import React from "react";
import { Link } from "react-router-dom";
import ListLogements from "../logements.json";
import "../css/cards.css"


function Cards () {
    return (
        <div className="cardContainer">
            <ul className="cardList">
                <li className="cardItem">
                    {ListLogements.map((item) => {
                        return (
                            <Link to={`/Residence/${item.id}`} className="residenceLink" key={item.id}>

                            <img src={item.cover} alt={item.title} className="residenceImage" />

                            <div className="cardInfo">
                                <h3 className="itemTitle">{item.title}</h3>    
                            </div>    
                            </Link>
                        );
                    })}
                </li>
            </ul>    
        </div>
    );
}

export default Cards;