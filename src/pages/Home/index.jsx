import React from "react";
import { useState, useEffect } from "react";
import Gallery from "../../components/Gallery";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const [logements, setLogements] = useState([]);
  //logements.json a été  délibérément mis dans le dossier public
  const getData = () => {
    fetch("./logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (tableauLogements) {
        console.log(tableauLogements);
        setLogements(tableauLogements);
      });
    // .catch((error) => { console.log(error); return []; })
  };

  useEffect(() => {
    getData();
  }, []);
  console.log("logements.length" + logements.length);

  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        {logements && logements.length > 0 ? (
          <Gallery logements={logements} />
        ) : (
          <h2>Chargement en cours...</h2>
        )}
      </main>
      <Footer />
    </>
  );
}
