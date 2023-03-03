import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carrousel from "../../components/Carrousel";
// import Card from "../../components/Card";
import { useParams, Navigate } from "react-router-dom";
// import { Redirect } from "react-router";
let currentHouse = {};
// let invalide = true;

export default function Logement(props) {
  const { logements } = props;
  const { id } = useParams();
  currentHouse = logements.find((house) => house.id === id);
  if (currentHouse !== undefined) {
    return (
      <>
        <Header />
        <main className="main-logement">
          <Carrousel currentHouse={currentHouse} />
        </main>
        <Footer />
      </>
    );
  } else {
    return <Navigate to="/error" />;
  }
}
