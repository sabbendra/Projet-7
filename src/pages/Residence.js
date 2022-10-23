import React from 'react';
import {useParams} from 'react-router-dom';
import ResidenceDetails from '../components/ResidenceDetails.js';
import CollapseResidence from "../components/CollapseResidence";
import Slider from "../components/Slider.js";
import Logement from "../logements.json";
import "../css/collapseResidence.css";
import CollapseDescriptionResidence from '../components/CollapseDescriptionResidence.js';

function Residence () {
    const { id } = useParams();
    const ResidenceId = Logement.find((item) => item.id === id);

    return (
        <div>
            <Slider pictures={ ResidenceId.pictures }/>

            <ResidenceDetails/>

            <div className="container-title-DescriptifResidence">

            <div className="title-DescriptifResidence">    
            <CollapseDescriptionResidence title="Description" content = {ResidenceId.description}/> 
            </div>

            <div className="title-DescriptifResidence">
            <CollapseResidence className="listEquipements" title="Equipements"  content={ResidenceId.equipments}/>
            </div>
            
            </div>
        </div>
    );
};

export default Residence;