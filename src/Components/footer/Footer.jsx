import React from "react";

import logo from "../../assets/images/DH.png";
import "./footer.css"

const Footer = () => {

  return (
    <footer className="d-flex flex-column" >
      <section className="justify-content-center ">
        <div className="footerText">
          <p> Powered by </p>
        </div>
      </section>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
        <div className="me-5 d-none d-lg-block">
          <img className="imageFooter" width={200} src={logo} alt='DH-logo' />
        </div>
        <div className="socialMedia">
          <a href="a" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="b" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="b" className="me-4 text-reset">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="a" className="me-4 text-reset">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
