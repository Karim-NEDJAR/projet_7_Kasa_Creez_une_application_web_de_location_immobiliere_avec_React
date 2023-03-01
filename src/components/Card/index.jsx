import React from "react";

export default function Card(props) {
  const { logement } = props;
  return (
    <div className="card">
      <div className="card-cover">
        <img src={logement.cover} alt={logement.title} />
        <p className="card-title">{logement.title}</p>
      </div>
    </div>
  );
}
