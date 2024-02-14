import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoHome from "./assets/CCS_COLOR.png";
import { Link } from "react-router-dom";
import Tjanster from "./Tjanster";
import kontaktImg from "./assets/kontakt.jpeg";

const Kontakt = () => {
  return (
    <div style={body}>
      <div style={nav}>
        <Link to="/tjanster" element={<Tjanster />}>
          <span style={navItem}>VÅRA TJÄNSTER</span>
        </Link>
        <span style={navItem}>MARKSERVICE</span>
        <span style={navItem}>REFERENSER</span>
        <span style={navItem}>KVALITET & MILJÖ</span>
        <span style={navItem}>BEGÄR OFFERT</span>
        <span style={navItem}>LEDIGA JOBB</span>
        <span style={navItem}>OM OSS</span>
        <span style={navItem}>KONTAKT</span>
      </div>
      <div style={topContainer}>
        <span style={title}>Kontakt</span>
        <img style={logo} src={logoHome} alt="Logga" />
        <div style={topRight}>
          <span style={title}>Företag</span>
          <span style={subtitle}>
            Gå till Privat
            <ArrowForwardIcon style={{ verticalAlign: "middle" }} />
          </span>
        </div>
      </div>
      <img src={kontaktImg} alt="Kontakt image" />
      <div style={spanContainer}>
        <span style={title}>Kontakta oss</span>
        <span style={subtitle}>Har du frågor eller funderingar? Tveka inte att kontakta oss.</span>
      </div>
      <div style={cardContainer}>
        <div style={card}>
        <span style={cardTitle}>CC Service AB</span>
        <span style={cardSubtitle}>Enhagsvägen 18, 187 40 Täby</span>

        </div>
      </div>
      <div style={cardContainer}>
        <div style={card}>
        <span style={cardTitle}>Telefon:</span>
        <span style={cardSubtitle}>08-506 363 88</span>
        </div>
      </div>
      <div style={cardContainer}>
        <div style={card}>
        <span style={cardTitle}>Mail:</span>
        <span style={cardSubtitle}>info@ccservice.se</span>
        </div>
      </div>
      <Link to="/kontakt" element={<Kontakt />}>
        <button style={button}>Offertförfrågan</button>
      </Link>
    </div>
  );
};

const body = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",
};
const topContainer = {
  display: "flex",
  justifyContent: "space-around",
  padding: 20,
  width: "100%",
  marginBottom: 20,
};

const topRight = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const logo = {
  width: 120,
  height: 120,
  marginTop: 25,
};

const title = {
  fontSize: 40,
  fontWeight: "bold",
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  fontSize: 57,
  fontWeight: 500,
  marginTop: 40,
};

const subtitle = {
  fontSize: 25,
  cursor: "pointer",
  fontFamily: "dosis, sans-serif",
  color: "#999a9a",
};

const spanContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 20,
  width: "50%",
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "75%",
  gap: 20,
};

const card = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'center',
  width: "50%",
};

const cardTitle = {
  fontSize: 25,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  margin: 15,
};

const cardSubtitle = {
  fontSize: 15,
  fontFamily: "dosis, sans-serif",
  color: "#999a9a",
  margin: 15,
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
  backgroundColor: "#f2f2f2",
  width: "100%",
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
