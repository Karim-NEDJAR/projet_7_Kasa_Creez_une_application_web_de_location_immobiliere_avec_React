import React from "react";
// import "../../style/about.css";
import Header from "../../components/Header";
// import srcAbout from "../../assets/banner-about.png";
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
    </>
  );
}
