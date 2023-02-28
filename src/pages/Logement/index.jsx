import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Card from "../../components/Card";
import { useParams } from "react-router-dom";

export default function Logement(props) {
  const { logements } = props;
  const { id } = useParams();
  if (!Number.isNaN(id) && Number.isInteger(id)) {
    const currentHouse = logements.find((house) => house.id === id);
    console.log("id : " + id);
    console.log("currentHouse.title : " + currentHouse.title);

    return (
      <>
        <Header />
        <h1>logement : {id}</h1>
        <h2> {currentHouse.title} </h2>
        <Footer />
      </>
    );
  } else {
    console.log("paramètre url incorrect: " + id);
    return null;
  }
}
