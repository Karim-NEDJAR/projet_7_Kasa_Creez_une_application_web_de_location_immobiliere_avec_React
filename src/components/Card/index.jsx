import React from "react";

export default function Card(props) {
  const { personne } = props;
  return (
    <div className="card">
      <div>
        <img src="../../assets/logo.png" alt="logo" />
        <p>
          {personne.nom} : {personne.age}
        </p>
      </div>
    </div>
  );
}
