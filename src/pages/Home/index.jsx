import React from "react";
// import { useState } from "react";
import Gallery from "../../components/Gallery";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
