import React, { Component } from 'react';
import Banner from "../components/Banner.js";
import Cards from '../components/Cards.js';

function Home () {
   
        return (
            <div>

                <div>
                    <Banner page = "home" />
                    <Cards />
                </div>
            </div>
        );
    };


export default Home;