import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoHome from "./assets/CCS_COLOR.png";
import { Link } from "react-router-dom";
import Kontakt from "./Kontakt";
import Markservice from "./Markservice";
import Referenser from "./Referenser";
import LedigaJobb from "./LedigaJobb";
import Tjanster from "./Tjanster";
import kvalitet_Miljo from "./assets/miljö_&_hållbarhet.jpeg";
import isoCert from "./assets/cc-ISO-merge-3.png";
import isoCert1 from "./assets/cc-ISO-merge-11.jpg";
import About from "./About";
import Offert from "./Offert";

const KvalitetMiljo = () => {
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
        src={kvalitet_Miljo}
        style={{ width: "75%" }}
        alt="Våra Tjänster image"
      />
      <div style={isoCertContainer}>
        <div style={spanContainer}>
          <span style={title}>Miljö och hållbarhet i fokus</span>
          <span style={subtitle}>
            Vår affärsidé är att utföra miljöanpassad lokalvård och andra
            servicetjänster med hög kvalitet och med ett professionellt
            kundbemötande. Ett miljömedvetet tänk är ständigt närvarande i vårt
            dagliga arbete. Vi är kvalitets- och miljöcertifierade enligt ISO
            9001:2015 och 14001:2015, vilket vi är väldigt stolta över. Miljön
            är vår framtid.
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={isoCertImageContainer}>
            <img
              style={{ height: 150, width: 250 }}
              src={isoCert}
              alt="ISO Certificat image"
            />
            <img
              style={{ height: 150, width: 250 }}
              src={isoCert1}
              alt="ISO Certificat image1"
            />
          </div>
          <Link
            to="https://ccservice.se/assets/Certifikat%202020.pdf"
            element={<Kontakt />}
          >
            <button style={button}>Se våra Certifikat</button>
          </Link>
        </div>
      </div>
      <div style={cardContainer}>
        <span style={cardTitle}>VÅRT KVALITETS- OCH MILJÖARBETE</span>
      </div>
      <div style={cardContainer}>
        <div style={card}>
          <span style={cardSubtitle}>
            ISO 9001:2015 är världens mest etablerade ramverk för kvalitet.
            Certifikatet garanterar att vi erbjuder en produkt som uppfyller
            myndighetskrav och att vi arbetar för en ökad kundtillfredsställelse
            och motiverad personal.
            <p>
              Vi är stolta över vårt certifikat, men kvalitet för oss är mycket
              mer än så. Vi vill att företaget utvecklas och är lönsamt, och
              inte minst att våra medarbetare är motiverade och trivs med att
              arbeta hos oss.
            </p>
            <p>
              ISO 14001:2015 innebär att CC Service tar ansvar för miljön
              gentemot kunder, personal och ägare. Vi arbetar aktivt för att
              använda miljömedvetna metoder i vårt dagliga arbete, vi följer upp
              och vidareutvecklar vår miljöpolicy och vi har detaljerade
              miljömål.
            </p>
            <p>
              Hållbar utveckling handlar inte bara om en god miljö, utan växer
              fram i samspelet mellan ekologisk, ekonomisk och social
              hållbarhet. Det är väldigt viktigt för oss.
            </p>
          </span>
        </div>
        <div style={card}>
          <span style={cardSubtitle}>
            I en så pass tuff bransch som lokalvård är arbetsmiljön extra viktig
            att ta hänsyn till. På CC Service genomför vi åtgärder för att
            förebygga ohälsa och olycksfall. Vi utbildar även vår personal om
            risker och förebyggande av arbetsskador, kemiska hälsorisker m.m.
            Detta innebär att vi kan hålla en hög kvalitet och skapa motivation
            som leder till bra samarbeten. En gemensam hög servicegrad bland
            alla anställda är också en del som vi prioriterar och kontinuerligt
            kontrollerar att vi följer.
            <p>
              I vår etikpolicy har vi fastställt att vi ska ta ett
              samhällsansvar, att bry oss om vår omvärld, respektera mänskliga
              rättigheter och kontinuerligt arbeta med hållbarhet. Vi tror att
              det är den bästa vägen till en lyckad verksamhet med nöjda kunder.
            </p>
          </span>
        </div>
      </div>
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
  marginRight: 180,
  marginLeft: 180,
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
  margin: 40,
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
  lineHeight: 1.5,
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
  marginTop: 25,
  marginBottom: 50,
  transition: "transform 0.2s ease-in-out",
  margin: 30,
};

const isoCertContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "75%",
};

const isoCertImageContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "75%",
  gap: 5,
};

const linkStyle = {
  textDecoration: "none",
  color: "#002554",
  fontSize: 20,
  fontWeight: 500,
  fontFamily: "dosis, sans-serif",
};

export default KvalitetMiljo;
