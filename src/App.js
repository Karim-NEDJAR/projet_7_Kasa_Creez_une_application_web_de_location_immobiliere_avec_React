import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Logement from "./pages/Logement";
import About from "./pages/About";
import "./style/style.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/Logement" element={<Logement />} /> */}
        <Route exact path="/Logement/:id" element={<Logement />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
