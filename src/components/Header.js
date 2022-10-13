import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logored.png";
import "../css/header.css";

function Header() {

    return ( 
        <div className ="headercontainer">
            <div className = "logo-red">
                 <img className='img' src ={logo} alt="logo de Kasa"/>
            </div>

            <nav>
                <ul className = "nav-menu">
                    <li className = "nav-item">
                        <Link to="/" className = "nav-link"> Accueil </Link>
                    </li>

                    <li className = "nav-item">
                        <Link to="/About" className = "nav-link"> A propos </Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
    }

export default Header;