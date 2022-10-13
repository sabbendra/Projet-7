import React, { Component } from 'react';
import Banner from "../components/Banner.js";
import Cards from '../components/Cards.js';


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