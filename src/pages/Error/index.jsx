import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <>
      <Header />
      <div className="error">
        <h1 className="error-code">404</h1>
        <h2 className="error-msg">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/" className="error-to-home">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </>
  );
}
