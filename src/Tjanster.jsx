import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoHome from "./assets/CCS_COLOR.png";
import varaTjanser from "./assets/vara-tjanster.jpeg";
import { Link } from "react-router-dom";
import Kontakt from "./Kontakt";
import Markservice from "./Markservice";
import Referenser from "./Referenser";
import KvalitetMiljo from "./KvalitetMiljo";
import LedigaJobb from "./LedigaJobb";
import About from "./About";
import Offert from "./Offert";
import Business from "./Business";

const Tjanster = () => {
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
      <img
        src={varaTjanser}
        style={{ width: "75%" }}
        alt="Våra Tjänster image"
      />
      <div style={spanContainer}>
        <span style={title}>Service som lever upp till dina krav</span>
        <span style={subtitle}>
          Våra kompetenta och engagerade medarbetare är de som bidrar till
          företagets utveckling. Det innebär att vi kan garantera en hög
          kvalitet och servicegrad. Men för att du ska bli övertygad så kan du
          givetvis testa oss innan du bestämmer dig!
        </span>
      </div>
      <div style={cardContainer}>
        <span style={cardTitle}>VÅRA FÖRETAGSTJÄNSTER</span>
      </div>
      <div style={cardContainer}>
        <div style={card}>
          <span style={cardSubtitle}>
            CC Service är ett lokalvårdsföretag med ett brett utbud av olika
            tjänster. Vi städar både kontor, hotell, trappor, skolor, etc. <p></p> För
            oss är det alltid viktigt att upprätthålla en hög kvalitet och en
            bra kundservice. Vår erfarenhet och vårt engagemang gör att vi kan
            erbjuda kundanpassade lösningar med bästa möjliga service.
            Miljöanpassad lokalvård är en självklarhet för oss och vi använder
            alltid bara miljömedvetna och miljömärkta metoder och kemikalier.
            <p>
              Våra resurser och priser gör oss konkurrenskraftiga på marknaden,
              men vi vill såklart att våra kunder ska känns sig trygga med oss
              som samarbetspartner. Långsiktiga relationer skapas genom
              förtroende. För att kunna känna på samarbetet och hitta ett
              fungerande tillvägagångssätt innan man tecknar några löpande
              avtal, erbjuder vi även engångstjänster.
            </p>
          </span>
        </div>
        <div style={card}>
          <span style={cardSubtitle}>
            Förutom våra ordinarie tjänster erbjuder vi även olika typer av
            specialstädning så som:
            <ul>
              <li>golvvård</li>
              <li>storstädning</li>
              <li>fönsterputs</li>
              <li>entrémattor</li>
              <li>flyttstädning</li>
              <li>mattvätt</li>
              <li>m.m</li>
            </ul>
            Oavsett vad ni har behov av så är ni välkomna att höra av er så
            kollar vi på en möjlig lösning!
          </span>
        </div>
      </div>
      <Link to="/kontakt" element={<Kontakt />}>
        <button style={button}>Kontakta oss</button>
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
  justifyContent: "space-between",
  padding: 20,
  width: "75%",
  marginBottom: 20,
  marginRight: 85,
  marginLeft: 85,
};

const topRight = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const logo = {
  width: 154,
  height: 181,
  marginTop: 25,
  margin: 40
};

const title = {
  fontWeight: "bold",
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  fontSize: 57,
  fontWeight: 500,
  marginTop: 40,
  marginBottom: 20,
};

const subtitle = {
  fontSize: 20,
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
  marginBottom: 10,
  height: 300,
};

const cardTitle = {
  fontSize: 25,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  marginBottom: 20,
};

const cardSubtitle = {
  fontSize: 15,
  fontFamily: "merriweather, sans-serif",
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
  cursor: "default",
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

const linkStyle = {
  textDecoration: "none",
  color: "#002554",
  fontSize: 20,
  fontWeight: 500,
  fontFamily: "dosis, sans-serif",
};

export default Tjanster;
