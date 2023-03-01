import React from "react";
// import "../../style/about.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import srcAbout from "../../assets/banner-about.png";

export default function About() {
  return (
    <>
      <Header />
      <div className="about">
        <img src={srcAbout} alt="banner in about page " />
      </div>
      <div className="about">
        <p> About</p>
      </div>
      <Footer />
    </>
  );
}
