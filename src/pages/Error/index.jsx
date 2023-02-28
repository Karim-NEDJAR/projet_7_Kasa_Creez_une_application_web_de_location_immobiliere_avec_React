import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function Error() {
  return (
    <>
      <Header />
      <div className="error">
        <h1>Erreur 404</h1>
      </div>
      <Footer />
    </>
  );
}
