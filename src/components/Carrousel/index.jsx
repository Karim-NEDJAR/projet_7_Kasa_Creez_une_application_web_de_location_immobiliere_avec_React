import React from "react";
import { useState } from "react";
import flecheGauche from "../../assets/arrow-left.png";
import flecheDroite from "../../assets/arrow-right.png";
import Tags from "../Tags";
import RatingBar from "../RatingBar";
import HostsCorner from "../HostsCorner";
import CarrouselCollapse from "../CarrouselCollapse";

export default function Carrousel({ currentHouse }) {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  console.log("from CARROUSEL, currentHouse.title == " + currentHouse.title);
  const nbImages = currentHouse.pictures.length;
  let isUnique = false;
  nbImages > 1 ? (isUnique = false) : (isUnique = true);
  const imageActuelle = currentHouse.pictures[CurrentIndex];

  const ImagePrecedente = () => {
    setCurrentIndex(CurrentIndex === 0 ? nbImages - 1 : CurrentIndex - 1);
  };
  const ImageSuivante = () => {
    setCurrentIndex(CurrentIndex === nbImages - 1 ? 0 : CurrentIndex + 1);
  };

  return (
    <>
      <section className="carrousel-container">
        <img
          className="carrousel-img"
          src={imageActuelle}
          alt={currentHouse.title}
          title={currentHouse.title}
        />
        {!isUnique && (
          <>
            <img
              className="carrousel-fleche-gauche"
              onClick={ImagePrecedente}
              src={flecheGauche}
              alt="Précédent"
            />
            <img
              className="carrousel-fleche-droite"
              onClick={ImageSuivante}
              src={flecheDroite}
              alt="Suivant"
            />
          </>
        )}
      </section>
      <section className="carrousel-infos">
        <div className="carrousel-infos-gauche">
          <h1 className="carrousel-infos-title"> {currentHouse.title} </h1>
          <p className="carrousel-infos-location"> {currentHouse.location} </p>
          <div className="carrousel-infos-tags">
            <Tags currentHouse={currentHouse} />
          </div>
        </div>
        <div className="carrousel-infos-droite">
          <HostsCorner currentHouse={currentHouse} />
          <RatingBar currentHouse={currentHouse} />
        </div>
      </section>
      <section className="equipements-bandeau-texte">
        <CarrouselCollapse currentHouse={currentHouse} />{" "}
      </section>
    </>
  );
}
