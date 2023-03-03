import React from "react";
import etoilePleine from "../../assets/etoile-pleine.png";
import etoileVide from "../../assets/etoile-vide.png";

export default function RatingBar({ currentHouse }) {
  const note = currentHouse.rating;
  let tableauEtoiles = [0, 0, 0, 0, 0];
  for (let i = 0; i < note; i++) {
    tableauEtoiles[i] = 1;
  }

  return (
    <div className="carrousel-infos-droite-notation">
      {tableauEtoiles.map((digit, index) => (
        <div className="carrousel-infos-droite-notation-etoile" key={index}>
          {digit === 1 ? (
            <img src={etoilePleine} alt={"étoile pleine"} />
          ) : (
            <img src={etoileVide} alt={"étoile vide"} />
          )}
        </div>
      ))}
    </div>
  );
}
