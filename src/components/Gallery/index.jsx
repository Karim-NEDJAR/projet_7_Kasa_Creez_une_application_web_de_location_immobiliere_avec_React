import React from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
// import { logements } from "../../assets/logements.json";

export default function Gallery(props) {
  const { logements } = props;
  if (logements && logements.length > 0) {
    return (
      <section className="gallery">
        {logements.map((logement, index) => (
          <Link to={`/logement/:${index}`}>
            <Card key={logements.id} logement={logement} />
          </Link>
        ))}
      </section>
    );
  }
}
