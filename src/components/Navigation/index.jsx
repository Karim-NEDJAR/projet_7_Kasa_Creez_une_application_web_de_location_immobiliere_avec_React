import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigationlinkhome">
        Accueil
      </Link>

      <Link to="/about" className="navigationlinkabout">
        À propos
      </Link>
    </nav>
  );
}
