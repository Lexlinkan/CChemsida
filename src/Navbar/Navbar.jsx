import React from "react";
import { Link } from "react-router-dom";
import logoHome from "../assets/CCS_COLOR.png";
import "./navbar.css";



const Navbar = () => {
  return (
    <div className="navcontainer">
        <div>
        <Link to="/">
          <img className="logo" src={logoHome} alt="Logga" />
        </Link>
        </div>
        <div className="nav">
          <Link className="linkStyle" to="/tjanster">
            <span className="navItem">VÅRA TJÄNSTER</span>
          </Link>
          <Link className="linkStyle" to="/markservice">
            <span className="navItem">MARKSERVICE</span>
          </Link>
          <Link className="linkStyle" to="/referenser">
            <span className="navItem">REFERENSER</span>
          </Link>
          <Link className="linkStyle" to="/kvalitetmiljo">
            <span className="navItem">KVALITET & MILJÖ</span>
          </Link>
          <Link className="linkStyle" to="/offert">
            <span className="navItem">BEGÄR OFFERT</span>
          </Link>{" "}
          <Link className="linkStyle" to="/ledigajobb">
            <span className="navItem">LEDIGA JOBB</span>
          </Link>
          <Link className="linkStyle" to="/omoss">
            <span className="navItem">OM OSS</span>
          </Link>
          <Link className="linkStyle" to="/kontakt">
            <span className="navItem">KONTAKT</span>
          </Link>
        </div>
    </div>
  );
};

export default Navbar;
