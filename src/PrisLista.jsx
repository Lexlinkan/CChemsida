import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Tjanster from "./Tjanster";
import Markservice from "./Markservice";
import Referenser from "./Referenser";
import KvalitetMiljo from "./KvalitetMiljo";
import LedigaJobb from "./LedigaJobb";
import About from "./About";
import Kontakt from "./Kontakt";
import logoHome from "./assets/CCS_COLOR.png";
import prisListImg from "./assets/prislista.jpeg";

const PrisLista = () => {
  const [selectedAbonemang, setSelectedAbonemang] = useState("ABONEMANG 1");

  const handleClick = (abonemang) => {
    setSelectedAbonemang(abonemang);
  };

  return (
    <div style={body}>
      <div style={topContainer}>
        <Link to="/">
          <img style={logo} src={logoHome} alt="Logga" />
        </Link>{" "}
        <div style={topRight}>
          <span style={title}>PRIVAT</span>
          <span style={subtitle}>
            Gå till Företag
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
        <Link to="/prislista" element={<PrisLista />}>
          <span style={navItem}>PRISLISTA</span>
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
      <img src={prisListImg} style={{ width: "75%" }} alt="Prislista" />
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#0076A8",
            width: 800,
            height: 450,
          }}
        >
          <div style={tabellStyleTop}>
            <span
              style={
                selectedAbonemang === "ABONEMANG 1"
                  ? selectedStyle
                  : unselectedStyle
              }
              onClick={() => handleClick("ABONEMANG 1")}
            >
              ABONEMANG 1
            </span>

            <span
              style={
                selectedAbonemang === "ABONEMANG 2"
                  ? selectedStyle
                  : unselectedStyle
              }
              onClick={() => handleClick("ABONEMANG 2")}
            >
              ABONEMANG 2
            </span>
            <span
              style={
                selectedAbonemang === "ABONEMANG 3"
                  ? selectedStyle
                  : unselectedStyle
              }
              onClick={() => handleClick("ABONEMANG 3")}
            >
              ABONEMANG 3
            </span>
          </div>

          {selectedAbonemang === "ABONEMANG 1" && (
            <table
              style={{
                color: "white",
                textAlign: "center",
                justifyContent: "space-between",
                margin: 5,
                fontFamily: "merriweather, sans-serif",
                letterSpacing: 2,
                lineHeight: 2,
                marginTop: 20,
              }}
            >
              <thead>
                <tr>
                  <th>Pris/mån</th>
                  <th>Tim/tillfälle</th>
                  <th>RUT-avdrag 50%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2 924 kr</td>
                  <td>2 tim/vecka</td>
                  <td>1 462 kr</td>
                </tr>
                <tr>
                  <td>4 386 kr</td>
                  <td>3 tim/vecka</td>
                  <td>2 193 kr</td>
                </tr>
                <tr>
                  <td>5 848 kr</td>
                  <td>4 tim/vecka</td>
                  <td>2 924 kr</td>
                </tr>
                <tr>
                  <td>7 310 kr</td>
                  <td>5 tim/vecka</td>
                  <td>3 655 kr</td>
                </tr>
                <tr>
                  <td>8 772 kr</td>
                  <td>6 tim/vecka</td>
                  <td>4 386 kr</td>
                </tr>
                <tr>
                  <td>10 234 kr</td>
                  <td>7 tim/vecka</td>
                  <td>5 117 kr</td>
                </tr>
                <tr>
                  <td>11 696 kr</td>
                  <td>8 tim/vecka</td>
                  <td>5 848 kr</td>
                </tr>
              </tbody>
            </table>
          )}
          <p
            style={{
              color: "white",
              fontFamily: "merriweather, sans-serif",
              textAlign: "left",
              marginLeft: 20,
            }}
          >
            Städning utförs vid 52 tillfällen per år
          </p>
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
export default PrisLista;

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
  width: 114,
  height: 141,
  marginTop: 25,
};

const title = {
  fontWeight: "bold",
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  fontSize: 57,
  fontWeight: 500,
  marginTop: 40,
  marginBottom: 40,
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
  cursor: "pointer",
};

const isoCertContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "75%",
};

const tabellStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
};

const tabellStyleTop = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "white",
  fontSize: 20,
};

const selectedStyle = {
  backgroundColor: "#0076A8",
  color: "white",
  margin: 20,
  cursor: "pointer",
  fontFamily: "dosis, sans-serif",
};

const unselectedStyle = {
  margin: 20,
  backgroundColor: "white",
  cursor: "pointer",
  fontFamily: "dosis, sans-serif",
};
