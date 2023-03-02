import React from "react";
import bannerAbout from "../../assets/banner-about.png";

export default function BannerAbout() {
  return (
    <section className="banner-about">
      <div className="banner-about-img-bg">
        <img src={bannerAbout} alt="about page banner" />
      </div>
      <div className="banner-about-background"> </div>
    </section>
  );
}
