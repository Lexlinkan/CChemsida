import React from "react";
import { Link } from "react-router-dom";
import { body, logo, nav, linkStyle, navItem, spanContainer, title, subtitle, cardContainer, card, cardTitle, cardSubtitle, button } from "./styles";
// Bilder
import logoHome from "../assets/CCS_COLOR.png";
import markImg from "../assets/markservice.jpeg";
import markImg1 from "../assets/markservice1.jpeg";

const Markservice = () => {
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
      <Link to="/kontakt">
        <button style={button}>Kontakta Oss</button>
      </Link>
    </div>
  );
};

export default Markservice;
