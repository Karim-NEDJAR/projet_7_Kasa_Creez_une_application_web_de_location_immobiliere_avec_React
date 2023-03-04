import React from "react";
import up from "../../assets/arrow-up.png";
import down from "../../assets/arrow-down.png";
import { useState } from "react";
import ListeEquipements from "../../components/ListeEquipements";

export default function CarrouselCollapse({ currentHouse }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cocheDescription = isCollapsed ? up : down;
  const cocheEquipements = isOpen ? up : down;
  const altCollapsed = isCollapsed
    ? "Masquer la description"
    : "Afficher la description";
  const altOpen = isOpen ? "Masquer la liste" : "Afficher la liste";

  return (
    <section className="carrousel-collapse">
      <div className="description-conteneur">
        <div className="description-bandeau">
          <p className="description-bandeau-titre">Description</p>
          <div
            className="haut-bas"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <img
              src={cocheDescription}
              alt={altCollapsed}
              title={altCollapsed}
            />
          </div>
        </div>
        {isCollapsed && (
          <div className="description-bandeau-texte">
            <br />
            {currentHouse.description}
            <br />
          </div>
        )}
      </div>
      <div className="equipements-conteneur">
        <div className="equipements-bandeau">
          <p className="equipements-bandeau-titre">Équipements</p>
          <div className="haut-ou-bas" onClick={() => setIsOpen(!isOpen)}>
            <img src={cocheEquipements} alt={altOpen} title={altOpen} />
          </div>
        </div>
        <div className="equipements-bandeau-texte">
          <br />
          {isOpen && <ListeEquipements equipments={currentHouse.equipments} />}
          <br />
        </div>
      </div>
    </section>
  );
}
