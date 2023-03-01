import React from "react";
import banner from "../../assets/banner-home.png";

export default function Banner() {
  return (
    <div className="banner">
      <h1 className="banner-title"> Chez vous, partout et ailleurs</h1>
      <div className="banner-img-bg">
        <img src={banner} alt="home page banner" />
      </div>
      <div className="banner-background"> </div>
    </div>
  );
}
