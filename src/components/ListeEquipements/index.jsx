import React from "react";

export default function ListeEquipements(props) {
  return (
    props.equipments &&
    props.equipments.map((equipment, index) => (
      <div key={index} className="equipement-liste">
        {equipment}
      </div>
    ))
  );
}
