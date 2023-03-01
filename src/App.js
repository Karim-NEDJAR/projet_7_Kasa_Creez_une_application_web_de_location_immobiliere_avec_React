import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Logement from "./pages/Logement";
import About from "./pages/About";
import { useState, useEffect } from "react";
import "./style/style.css";

export default function App() {
  //logements.json a été  délibérément mis dans le dossier public
  const [logements, setLogements] = useState([]);
  //fonction de récupération
  //sous forme de tableau de l'ensemble des logements
  const getLogements = () => {
    fetch("./logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        //console.log(response);
        return response.json();
      })
      .then(function (tableauLogements) {
        // console.log(tableauLogements);
        setLogements(tableauLogements);
        //return tableauLogements;
      })
      .catch((error) => {
        console.log(error);
        //return undefined;
      });
  };

  useEffect(() => {
    getLogements();
  }, []);

  console.log("\n logements == \n " + logements);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home logements={logements} />} />
        <Route
          exact
          path="/Logement/:id"
          element={<Logement logements={logements} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
