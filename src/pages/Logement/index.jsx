import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carrousel from "../../components/Carrousel";
import { useParams, Navigate } from "react-router-dom";

export default function Logement(props) {
  let currentHouse = {};
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
