import React from "react";
import haut from "../../assets/arrow-up.png";
import bas from "../../assets/arrow-down.png";
import { useState } from "react";

export default function Collapse(props) {
  const [collapsed, setCollapsed] = useState(false);
  const nothing = "";
  const changeState = () => {
    setCollapsed(!collapsed);
  };
  return (
    <article className="offre">
      <div className="engagement">
        <p className="engagement-titre"> {props.engagement} </p>
        <div className="up-down" onClick={changeState}>
          <img
            src={collapsed ? haut : bas}
            alt={collapsed ? "Masquer" : "Afficher"}
            title={collapsed ? "Masquer" : "Afficher"}
          />
        </div>
      </div>
      {collapsed ? (
        <p className="garantie">
          <br /> {props.garantie}
        </p>
      ) : (
        <p className="garantie"> {nothing}</p>
      )}
    </article>
  );
}
