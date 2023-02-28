import React from "react";

export default function Card(props) {
  const { logement } = props;
  return (
    <div className="card">
      <div>
        {/* <img src="../../assets/logo.png" alt="logo" /> */}
        <img src={logement.cover} alt="logo" />
        <p>{logement.title}</p>
      </div>
    </div>
  );
}
