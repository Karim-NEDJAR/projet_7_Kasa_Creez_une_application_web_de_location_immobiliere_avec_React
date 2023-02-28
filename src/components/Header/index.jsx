import React from "react";
import Navigation from "../Navigation";
import Logo from "../Logo";
// import "../../style/header.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
}
