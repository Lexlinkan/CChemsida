import React from "react";
import { Link } from "react-router-dom";
// Bilder
import logoHome from "../assets/CCS_COLOR.png";
import kontaktImg from "../assets/kontakt.jpeg";
import Offert from "../Offert/Offert";
import { body, logo, nav, navItem, spanContainer, underSpanContainer, button, title, subtitle, cardTitle, cardSubtitle, linkStyle } from "./styles";



const Kontakt = () => {
  return (
    <div style={body}>
      <Link to="/">
        <img style={logo} src={logoHome} alt="Logga" />
      </Link>{" "}
      <div style={nav}>
        <Link style={linkStyle} to="/tjanster">
          <span style={navItem}>VÅRA TJÄNSTER</span>
        </Link>
        <Link style={linkStyle} to="/markservice">
          <span style={navItem}>MARKSERVICE</span>
        </Link>
        <Link style={linkStyle} to="/referenser">
          <span style={navItem}>REFERENSER</span>
        </Link>
        <Link style={linkStyle} to="/kvalitetmiljo">
          <span style={navItem}>KVALITET & MILJÖ</span>
        </Link>
        <Link style={linkStyle} to="/offert">
          <span style={navItem}>BEGÄR OFFERT</span>
        </Link>{" "}
        <Link style={linkStyle} to="/ledigajobb">
          <span style={navItem}>LEDIGA JOBB</span>
        </Link>
        <Link style={linkStyle} to="/omoss">
          <span style={navItem}>OM OSS</span>
        </Link>
        <Link style={linkStyle} to="/kontakt">
          <span style={navItem}>KONTAKT</span>
        </Link>
      </div>
      <img src={kontaktImg} style={{ width: "75%" }} alt="Kontakt image" />
      <div style={spanContainer}>
        <span style={title}>Kontakta oss</span>
        <span style={subtitle}>
          Vi strävar efter att hitta långsiktiga samarbeten som fungerar för
          alla parter. Är det något ni funderar över eller om ni vill veta mer
          om hur vi jobbar eller våra tjänster, tveka inte att kontakta oss!
        </span>
      </div>
      <div style={underSpanContainer}>
        <span style={cardTitle}>CC Service AB</span>
        <span style={cardSubtitle}>Enhagsvägen 18, 187 40 Täby</span>
      </div>
      <div style={underSpanContainer}>
        <span style={cardTitle}>Telefon</span>
        <span style={cardSubtitle}>08-506 363 88</span>
      </div>
      <div style={underSpanContainer}>
        <span style={cardTitle}>Mail</span>
        <span style={cardSubtitle}>info@ccservice.se</span>
        <Link to="/offert" element={<Offert />}>
          <button style={button}>Offertförfrågan</button>
        </Link>
      </div>
    </div>
  );
};

export default Kontakt;
