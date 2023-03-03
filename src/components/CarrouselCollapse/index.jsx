import React from "react";
import up from "../../assets/arrow-up.png";
import down from "../../assets/arrow-down.png";
import { useState } from "react";
import ListeEquipements from "../../components/ListeEquipements";

export default function CarrouselCollapse({ currentHouse }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const coche = isCollapsed ? up : down;
  const altTxt = isCollapsed ? "Masquer le menu" : "Afficher le menu";
  //   const nada = "";
  //   const tableauEquipements = currentHouse.equipments;

  return (
    <section className="carrousel-collapse">
      <div className="description-conteneur">
        <div className="description-bandeau">
          <p className="description-bandeau-titre">Description</p>
          <div
            className="haut-bas"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <img src={coche} alt={altTxt} />
          </div>
        </div>
        {isCollapsed && (
          <div className="description-bandeau-texte">
            {currentHouse.description}
          </div>
        )}
      </div>
      <div className="equipements-conteneur">
        <div className="equipements-bandeau">
          <p className="equipements-bandeau-titre">Équipements</p>
          <div className="haut-ou-bas" onClick={() => setIsOpen(!isOpen)}>
            <img src={coche} alt={altTxt} />
          </div>
        </div>
        {isOpen && <ListeEquipements equipments={currentHouse.equipments} />}
      </div>
    </section>
  );
}
