import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoHome from "./assets/CCS_COLOR.png";
import { Link } from "react-router-dom";
import Tjanster from "./Tjanster";
import kontaktImg from "./assets/kontakt.jpeg";
import Offert from "./Offert";
import Referenser from "./Referenser";
import Markservice from "./Markservice";
import KvalitetMiljo from "./KvalitetMiljo";
import LedigaJobb from "./LedigaJobb";
import About from "./About";

const Kontakt = () => {
  return (
    <div style={body}>
      <div style={topContainer}>
        {/* <span style={title}>Kontakt</span> */}
        <Link to="/">
          <img style={logo} src={logoHome} alt="Logga" />
        </Link>{" "}
        <div style={topRight}>
          <span style={title}>Företag</span>
          <span style={subtitle}>
            Gå till Privat
            <ArrowForwardIcon style={{ verticalAlign: "middle" }} />
          </span>
        </div>
      </div>
      <div style={nav}>
        <Link to="/tjanster" element={<Tjanster />}>
          <span style={navItem}>VÅRA TJÄNSTER</span>
        </Link>
        <Link to="/markservice" element={<Markservice />}>
          <span style={navItem}>MARKSERVICE</span>
        </Link>
        <Link to="/referenser" element={<Referenser />}>
          <span style={navItem}>REFERENSER</span>
        </Link>
        <Link to="/kvalitetmiljo" element={<KvalitetMiljo />}>
          <span style={navItem}>KVALITET & MILJÖ</span>
        </Link>
        <Link to="/offert" element={<Offert />}>
          <span style={navItem}>BEGÄR OFFERT</span>
        </Link>{" "}
        <Link to="/ledigajobb" element={<LedigaJobb />}>
          <span style={navItem}>LEDIGA JOBB</span>
        </Link>
        <Link to="/omoss" element={<About />}>
          <span style={navItem}>OM OSS</span>
        </Link>
        <Link to="/kontakt" element={<Kontakt />}>
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

const body = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
};
const topContainer = {
  display: "flex",
  justifyContent: "space-between",
  padding: 20,
  width: "75%",
  marginBottom: 20,
};

const topRight = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const logo = {
  width: 114,
  height: 141,
  marginTop: 25,
};

const title = {
  fontSize: 30,
  fontWeight: "bold",
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  fontSize: 57,
  fontWeight: 500,
  marginTop: 40,
  marginBottom: 40,
};

const subtitle = {
  fontSize: 15,
  cursor: "pointer",
  fontFamily: "merriweather, sans-serif",
  color: "#999a9a",
  maxWidth: 600,
  letterSpacing: 1,
  lineHeight: 1.5,
};

const spanContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: 20,
  width: "75%",
};

const underSpanContainer = {
  display: "flex",
  flexDirection: "column",
  padding: 10,
  width: "75%",
};

const cardTitle = {
  fontSize: 25,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
};

const cardSubtitle = {
  fontSize: 15,
  fontFamily: "Merriweather, sans-serif",
  color: "#999a9a",
  letterSpacing: 2,
};

const nav = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "row",
  padding: 20,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  fontSize: 20,
  fontWeight: 500,
  width: "79%",
};

const navItem = {
  transition: "transform 0.2s ease-in-out",
  cursor: "pointer",
};

const button = {
  backgroundColor: "#002554",
  color: "white",
  width: 200,
  padding: 10,
  borderRadius: 5,
  border: "none",
  cursor: "pointer",
  fontSize: 20,
  fontFamily: "dosis, sans-serif",
  marginTop: 50,
  marginBottom: 150,
  transition: "transform 0.2s ease-in-out",
};

export default Kontakt;
