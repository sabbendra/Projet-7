import React from "react";
import { useParams } from "react-router-dom";
import Logement from "../logements.json";
import "../css/residenceDetails.css";

function ResidenceDetails () {
    const { id } = useParams();
    const residence = Logement.find ((item) => item.id === id);
    

const starsArray = []; //on initialise un tableau vide pour les étoiles rouges
const greyStarsArray = []; //on initialise un tableau vide pour les étoiles grises
const rating = residence.rating; //on récupère le nb d'étoile du json
const greyStar = 5 - rating; //le nb d'étoile vide est de 5 moins le nb d'étoile du json
console.log("grey", greyStar); //on vérifie que le nb d'étoile vide est correcte

for (let i = 0; i < rating; i++) {
  starsArray.push("red"); //on push la valeur 'red' (c'est juste une string) dans le tableau starsArray, on le push Z fois, Z étant la valeur de rating
}
console.log("star", starsArray); //on vérifie le contenu du tableau qui doit être Z fois red, par exemple pour 3 étoiles (en json) ça donnerait : [red, red, red]

for (let i = 0; i < greyStar; i++) {
  greyStarsArray.push("grey"); //on push la valeur 'grey' (pareil, c'est juste une string, tu peux marquer 'camion' ça fonctionnera aussi ;p) dans le tableau greyStarsArray, on le push Z fois, Z étant la valeur de greyStars (5 - rating)
}
console.log("greystar", greyStarsArray); //on vérifie le contenue du tableau, par ex si rating = 3, le tableau grey star doit contenir [grey, grey].

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

      {starsArray.map((star, index) => { //Et on map le tableau des étoiles pleines, pour chaque élément 'red' du tableau (qu'on peu remplacer par camion, je rappelle que c'est juste un nom), on crée une balise <i> qui a comme key l'index de chaque élément du tableau, tu noteras que l'argument 'star' n'est pas utilisé, mais il faut donné un premier argument pour pouvoir en donner un 2e, car le 2e argument correspond automatiquement à l'index du tableau, utile pour avoir une key unique
              return <i className="fa-solid fa-star red-stars" key={index}></i>;
            })}
            {greyStarsArray.map((star, index) => { //pareil que plus haut sauf qu'on map les étoiles vides
              return <i className="fa-solid fa-star grey-stars" key={index}></i>;
            })}
        
      </div>
    </div>
  </div>
);
};

export default ResidenceDetails
