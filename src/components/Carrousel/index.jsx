import React from "react";
import { useState } from "react";
import flecheGauche from "../../assets/arrow-left.png";
import flecheDroite from "../../assets/arrow-right.png";
import Tags from "../Tags";
import etoilePleine from "../../assets/etoile-pleine.png";
import etoileVide from "../../assets/etoile-vide.png";

export default function Carrousel({ currentHouse }) {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  // const [isUnique, setIsUnique] = useState();
  console.log("from CARROUSEL, currentHouse.title == " + currentHouse.title);
  const nbImages = currentHouse.pictures.length;
  const imageActuelle = currentHouse.pictures[CurrentIndex];
  const note = currentHouse.rating;
  let tableauEtoiles = [0, 0, 0, 0, 0];
  for (let i = 0; i < note; i++) {
    tableauEtoiles[i] = 1;
  }
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
          <div className="carrousel-infos-droite-host">
            <div className="carrousel-infos-droite-hostname">
              {currentHouse.host.name}{" "}
            </div>
            <div className="carrousel-infos-droite-hostpicture">
              <img
                src={currentHouse.host.picture}
                alt={currentHouse.host.name}
              />
            </div>
          </div>
          <div className="carrousel-infos-droite-notation">
            <span>
              {tableauEtoiles[0] === 1 ? (
                <img
                  src={etoilePleine}
                  alt={
                    tableauEtoiles[0] === 1 ? "étoile pleine" : "étoile vide"
                  }
                />
              ) : (
                <img
                  src={etoileVide}
                  alt={
                    tableauEtoiles[0] === 1 ? "étoile pleine" : "étoile vide"
                  }
                />
              )}
            </span>
            <span>
              {tableauEtoiles[0] === 1 ? (
                <img
                  src={etoilePleine}
                  alt={
                    tableauEtoiles[0] === 1 ? "étoile pleine" : "étoile vide"
                  }
                />
              ) : (
                <img
                  src={etoileVide}
                  alt={
                    tableauEtoiles[0] === 1 ? "étoile pleine" : "étoile vide"
                  }
                />
              )}
            </span>
            <span>
              {tableauEtoiles[0] === 1 ? (
                <img
                  src={etoilePleine}
                  alt={
                    tableauEtoiles[0] === 1 ? "étoile pleine" : "étoile vide"
                  }
                />
              ) : (
                <img
                  src={etoileVide}
                  alt={
                    tableauEtoiles[0] === 1 ? "étoile pleine" : "étoile vide"
                  }
                />
              )}
            </span>
            <span>
              {tableauEtoiles[0] === 1 ? (
                <img
                  src={etoilePleine}
                  alt={
                    tableauEtoiles[0] === 1 ? "étoile pleine" : "étoile vide"
                  }
                />
              ) : (
                <img
                  src={etoileVide}
                  alt={
                    tableauEtoiles[0] === 1 ? "étoile pleine" : "étoile vide"
                  }
                />
              )}
            </span>
            <span>
              {tableauEtoiles[0] === 1 ? (
                <img
                  src={etoilePleine}
                  alt={
                    tableauEtoiles[0] === 1 ? "étoile pleine" : "étoile vide"
                  }
                />
              ) : (
                <img
                  src={etoileVide}
                  alt={
                    tableauEtoiles[0] === 1 ? "étoile pleine" : "étoile vide"
                  }
                />
              )}
            </span>
          </div>
        </div>
      </section>
      <section className="carrousel-collapse"> collapse</section>
    </>
  );
}
