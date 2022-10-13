import React from 'react';
import { Link } from "react-router-dom";
import "../css/error.css";

function Error() {

    return ( 
        <div className ="errorContainer">
            <p> 404 </p>
            <p className="errorMessage"> Oups! La page que vous demandez n'existe pas. </p>   

        <div>
            <Link to="/" className = "errorlink"> Retourner à la page d'accueil </Link>
        </div>
           

        </div>
    );
    }

export default Error;