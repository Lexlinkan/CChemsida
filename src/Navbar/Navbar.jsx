import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoHome from "../assets/CCS_COLOR.png";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1400);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="navBody">
        <div className="logoContainer">
          <Link to="/">
            <img className="logo" src={logoHome} alt="Logga" />
          </Link>
        </div>
        {isMobile ? (
          <div className="navbarElements">
            <div className={`nav ${open ? "open" : ""}`}>
              <Link
                className="linkStyle"
                to="/tjanster"
                onClick={() => setOpen(false)}
              >
                <span className="navItem">VÅRA TJÄNSTER</span>
              </Link>
              <Link
                className="linkStyle"
                to="/markservice"
                onClick={() => setOpen(false)}
              >
                <span className="navItem">MARKSERVICE</span>
              </Link>
              <Link
                className="linkStyle"
                to="/referenser"
                onClick={() => setOpen(false)}
              >
                <span className="navItem">REFERENSER</span>
              </Link>
              <Link
                className="linkStyle"
                to="/kvalitetmiljo"
                onClick={() => setOpen(false)}
              >
                <span className="navItem">KVALITET & MILJÖ</span>
              </Link>
              <Link
                className="linkStyle"
                to="/offert"
                onClick={() => setOpen(false)}
              >
                <span className="navItem">BEGÄR OFFERT</span>
              </Link>
              <Link
                className="linkStyle"
                to="/about"
                onClick={() => setOpen(false)}
              >
                <span className="navItem">OM OSS</span>
              </Link>
              <Link
                className="linkStyle"
                to="/kontakt"
                onClick={() => setOpen(false)}
              >
                <span className="navItem">KONTAKT</span>
              </Link>
            </div>
            <MenuIcon
              style={{ fontSize: "50" }}
              className="burgerMenu"
              onClick={toggleMenu}
            />
          </div>
        ) : (
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
            </Link>
            <Link className="linkStyle" to="/about">
              <span className="navItem">OM OSS</span>
            </Link>
            <Link className="linkStyle" to="/kontakt">
              <span className="navItem">KONTAKT</span>
            </Link>
          </div>
        )}
    </div>
  );
};

export default Navbar;
