import React from "react";
// import "../../style/about.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="about">
        <img src="../../../assets/banner-about.png" alt="about page banner" />
      </div>
      <div className="about">
        <p> About</p>
      </div>
      <Footer />
    </>
  );
}
