import React from "react";
import banner from "../../assets/banner-home.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-img-bg">
        <h1> Chez vous, partout et ailleurs</h1>
        <img src={banner} alt="home page banner" />
      </div>
    </div>
  );
}
