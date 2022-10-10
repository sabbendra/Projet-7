import React, { Component } from 'react';
import bannerHome from "../images/bannerHome.png";
import bannerAbout from "../images/bannerAbout.png";
import "../css/banner.css"

class Banner extends Component {
    render () {

        return this.props.page ==="home" ? (

            <div className ="banner">
                <img className = "imgbanner" src = {bannerHome} alt = "photo de la bannière"/>
                <h1 className ="texteBanner"> Chez vous, partout et ailleurs </h1>
            </div> 

        ) : (

            <div className ="banner">
                <img src = {bannerAbout} alt = "photo de la bannière"/>
            </div> 

        );
    }
    
}

export default Banner;