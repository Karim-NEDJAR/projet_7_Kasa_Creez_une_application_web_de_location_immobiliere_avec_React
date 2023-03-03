import React from "react";
// import "../../style/about.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BannerAbout from "../../components/BannerAbout";
import Collapse from "../../components/Collapse";

export default function About() {
  return (
    <>
      <Header />
      <main className="main-about">
        <BannerAbout />
        <Collapse />
      </main>
      <Footer />
    </>
  );
}
