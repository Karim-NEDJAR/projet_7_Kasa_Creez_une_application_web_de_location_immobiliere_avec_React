import React from "react";
import Card from "../../components/Card";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { logements } from "../../assets/logements.json";

// async function getLogements() {
//   try {
//     const response = await fetch("../../assets/logements.json");
//     const logements = await response.json();
//     return logements;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// }
// const logements = getLogements();

// const [logements, setLogements] = useState([]);

// fetch("../../assets/logements.json").then((response) =>
//   response
//     .json()
//     .then((data) => {
//       console.log("data: \n" + data);
//       setLogements(data);
//     })
//     .catch((error) => console.error(error))
// );

const liste1 = [
  { nom: "toto", age: 55 },
  { nom: "titi", age: 42 },
  { nom: "kiki", age: 22 },
  { nom: "nono", age: 22 },
  { nom: "tutu", age: 10 },
  { nom: "momo", age: 7 },
];

export default function Gallery() {
  return (
    <section className="gallery">
      {liste1.map((personne) => (
        <Link to={`/logement/:${personne.nom}`}>
          <Card key={personne.nom} personne={personne} />
        </Link>
      ))}
    </section>
  );
}
