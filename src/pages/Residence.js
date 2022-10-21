import React from 'react';
import {useParams} from 'react-router-dom';
import Slider from "../components/Slider.js";
import Logement from "../logements.json";

function Residence () {
    const { id } = useParams();
    const ResidenceId = Logement.find ((item) => item.id === id);

    return (
        <div>
            <Slider pictures={ ResidenceId.pictures }/>
            

        </div>
    );
};

export default Residence;