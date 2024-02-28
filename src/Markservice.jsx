import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoHome from "./assets/CCS_COLOR.png";
import markImg from "./assets/markservice.jpeg";
import markImg1 from "./assets/markservice1.jpeg";
import { Link } from "react-router-dom";
import Tjanster from "./Tjanster";
import Kontakt from "./Kontakt";
import Referenser from "./Referenser";
import KvalitetMiljo from "./KvalitetMiljo";
import LedigaJobb from "./LedigaJobb";
import About from "./About";
import Offert from "./Offert";

const Markservice = () => {
  return (
    <div style={body}>
      <div style={topContainer}>
        {/* <span style={title}>Markservice</span> */}
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
        <span style={navItem}>MARKSERVICE</span>
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
        </Link>{" "}
        <Link to="/kontakt" element={<Kontakt />}>
          <span style={navItem}>KONTAKT</span>
        </Link>
      </div>
      <div
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <img src={markImg} style={{ width: "75%" }} alt="Markservice image" />
        <img
          src={markImg1}
          style={{ width: "75%" }}
          alt="Markservice image 1"
        />
      </div>
      <div style={spanContainer}>
        <span style={title}>
          Skötsel och underhåll av din fastighetstomt – året runt
        </span>
        <span style={subtitle}>
          Vi förstår vikten av ett prydligt första intryck när det gäller ditt
          företags utemiljö och fastighetsmark. Därför erbjuder vi utöver våra
          städtjänster, heltäckande tjänster inom markservice för hela året.
        </span>
      </div>
      <div style={cardContainer}>
        <span style={cardTitle}>MARKSERVICE EFTER DINA KRAV OCH ÖNSKEMÅL</span>
      </div>
      <div style={cardContainer}>
        <div style={card}>
          <span style={cardSubtitle}>
            En välskött trädgård för din hyresfastighet eller planläggning av en
            ny fastighetstomt – vi anpassar våra tjänster efter dina behov. Vi
            har en hög kvalitets- och servicenivå och erbjuder hantering av
            större trädgårdsarbete året runt. Det kan innebära allt från
            beskärning av träd, snöröjning och halkbekämpning m.m. Vi sköter
            plantering samt underhåll och städning i den form som passar er
            utemiljö. Tillsammans kommer vi överens om hur ett löpande samarbete
            kan utformas.
          </span>
        </div>
        <div style={card}>
          <span style={cardSubtitle}>
            Hög flexibilitet och snabb service är en självklarhet. Oavsett ditt
            behov hittar vi alltid en bra lösning. Välkommen att höra av dig!
          </span>
        </div>
      </div>
      <Link to="/kontakt" element={<Kontakt />}>
        <button style={button}>Kontakta Oss</button>
      </Link>
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
  marginBottom: 50,
};

const cardContainer = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  width: "75%",
  gap: 20,
};

const card = {
  display: "flex",
  flexDirection: "row",
  width: "50%",
  marginBottom: 50,
  height: 150,
};

const cardTitle = {
  fontSize: 25,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  marginBottom: 20,
};

const cardSubtitle = {
  fontSize: 15,
  fontFamily: "Merriweather, sans-serif",
  color: "#999a9a",
  letterSpacing: 2,
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
  marginBottom: 50,
  transition: "transform 0.2s ease-in-out",
};

export default Markservice;
