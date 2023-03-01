import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation-link-home">
        Accueil
      </Link>
      <Link to="/about" className="navigation-link-about">
        À propos
      </Link>
    </nav>
  );
}
