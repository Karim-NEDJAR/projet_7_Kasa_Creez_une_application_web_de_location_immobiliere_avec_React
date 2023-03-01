import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Card from "../../components/Card";
import { useParams } from "react-router-dom";
let currentHouse = {};
// let invalide = true;

export default function Logement(props) {
  const { logements } = props;
  const { id } = useParams();
  // console.log("\n from LOGEMENT id de useParams" + id);
  // console.log("\n from LOGEMENT logements.length : " + logements.length());

  //TODO: vérifier que id se trouve dans le tableau des logements
  // sinon rediriger vers 404 error

  // console.log("\n logements.title  = " + logements.title);
  // invalide =
  //   Number.isNaN(parseInt(id, 10)) || !Number.isInteger(parseInt(id, 10));
  // if (invalide === false) {
  //   currentHouse = logements.find((house) => house.id === id);
  //   console.log("\n intId : " + id);
  //   console.log(
  //     "\n from LOGEMENT , currentHouse.title : " + currentHouse.title
  //   );
  // } else {
  //   console.log("\n id : " + id);
  //   console.log("from LOGEMENT, currentHouse.title : not defined ");
  // }
  // vérifie qu'on retrouve cet id dans le tableau des logements
  currentHouse = logements.find((house) => house.id === id);
  if (currentHouse !== undefined) {
    return (
      <>
        <Header />
        {/* <h1>logement {id} information non trouvée</h1> */}
        <h2> {currentHouse.title} </h2>
        <Footer />
      </>
    );
  } else {
    //todo : faire une redirection vers la page error
    return (
      <div>
        {" "}
        <h1> Ce logement n'existe pas! </h1>
      </div>
    );
  }
}
