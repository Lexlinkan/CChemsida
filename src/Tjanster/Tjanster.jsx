import React from "react";
import { Link } from "react-router-dom";
import { body, logo, nav, linkStyle, navItem, spanContainer, title, subtitle, cardContainer, cardTitle, card, cardSubtitle, button } from "../Tjanster/styles";

// Bilder
import logoHome from "../assets/CCS_COLOR.png";
import varaTjanser from "../assets/vara-tjanster.jpeg";

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
      <Link to="/kontakt">
        <button style={button}>Kontakta oss</button>
      </Link>
    </div>
  );
};

export default Tjanster;
