import React from "react";
import Navigation from "../Navigation";
import "../../style/error.css";

export default function Header() {
  return (
    <div className="header">
      <img src="../../assets/LOGO.svg" alt="logo kasa"></img>
      <Navigation />
    </div>
  );
}
