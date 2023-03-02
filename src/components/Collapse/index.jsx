import React from "react";
import offres from "../../assets/services.json";
import haut from "../../assets/arrow-up.png";
import bas from "../../assets/arrow-down.png";
import { useState } from "react";

export default function Collapse() {
  const [collapsed, setCollapsed] = useState(true); // par défaut le menu est déroulé
  const fleche = collapsed ? haut : bas;
  const altText = collapsed ? "Masquer" : "Afficher";
  const nothing = "";

  const changeCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <section className="collapse">
      {offres &&
        offres.map((offre, index) => {
          return (
            <article className="offre" key={index}>
              <div className="engagement">
                <p className="engagement-titre"> {offre.engagement} </p>
                <div className="up-down" onClick={changeCollapse}>
                  <img src={fleche} alt={altText} />
                </div>
              </div>
              {collapsed ? (
                <p className="garantie">
                  <br /> {offre.garantie}
                </p>
              ) : (
                <p className="garantie"> {nothing}</p>
              )}
            </article>
          );
        })}
    </section>
  );
}
