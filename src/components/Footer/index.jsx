import React from "react";
import logoFooter from "../../assets/logo-blanc.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-img-wrapper">
        <img src={logoFooter} alt="logo Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
