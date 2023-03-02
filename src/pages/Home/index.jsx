import React from "react";
import Gallery from "../../components/Gallery";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home(props) {
  const { logements } = props;
  console.log("from HOME: logements= \n " + logements);
  return (
    <>
      <Header />
      <main className="main-home">
        <Banner />
        {logements && logements.length > 0 ? (
          <Gallery logements={logements} />
        ) : (
          <h2>Recherche des informations demandées ...</h2>
        )}
      </main>
      <Footer />
    </>
  );
}
