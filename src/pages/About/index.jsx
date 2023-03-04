import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BannerAbout from "../../components/BannerAbout";
import Collapse from "../../components/Collapse";
import offres from "../../assets/services.json";

export default function About() {
  return (
    <>
      <Header />
      <main className="main-about">
        <BannerAbout />
        <section className="collapse">
          {offres.map((offre, index) => (
            <Collapse
              key={index}
              engagement={offre.engagement}
              garantie={offre.garantie}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
