import React from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
// import { logements } from "../../assets/logements.json";

export default function Gallery(props) {
  const { logements } = props;

  return (
    <section className="gallery">
      {logements &&
        logements.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Card key={logement.id} logement={logement} />
          </Link>
        ))}
    </section>
  );

  /**
   return (
    <section className="gallery">
      {logements && logements.length > 0 ? (
        logements.map((logement) => (
          <Link to={`/logement/${logement.id}`}>
            <Card key={logement.id} logement={logement} />
          </Link>
         ))
      ) : (
        <h2> Informations non trouvées ... </h2>
      )} }
      </section>
      );
 * **/
}
