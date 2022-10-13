import React, { Component } from 'react';
import Banner from "../components/Banner.js";
import Cards from '../components/Cards.js';
import "../css/body.css";


export class Home extends Component {
    render () {

        return (
            <div>
                <Banner page = "home" />
                <Cards />
            </div>
        );
    }

};

export default Home;