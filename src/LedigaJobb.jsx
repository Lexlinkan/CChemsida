import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoHome from "./assets/CCS_COLOR.png";
import { Link } from "react-router-dom";
import ledigaJobbImg from "./assets/lediga-jobb.jpg";
import Kontakt from "./Kontakt";
import Markservice from "./Markservice";
import Referenser from "./Referenser";
import KvalitetMiljo from "./KvalitetMiljo";
import Tjanster from "./Tjanster";
import About from "./About";
import Offert from "./Offert";

const LedigaJobb = () => {
  return (
    <div style={body}>
      <Link to="/">
        <img style={logo} src={logoHome} alt="Logga" />
      </Link>{" "}
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
      <img
        src={ledigaJobbImg}
        style={{ width: "75%" }}
        alt="Våra Tjänster image"
      />
      <div style={spanContainer}>
        <span style={title}>
          Vill du jobba på CC Service? Vi har nu två lediga tjänster - en driven
          säljare och en ambitiös supervisor!
        </span>
        <span style={subtitle}>
          Är du en duktig, målmedveten och tävlingsinriktad säljare som vill
          arbeta med försäljning av våra tjänster och mötesbokning med
          intressanta kundprospekt? Hos oss får du jobba med ett expansivt
          städbolag med gott renommé. <p></p> Eller är du en stresstålig,
          ambitiös och noggrann supervisor som vill arbeta ute hos en av våra
          kunder?{" "}
          <p style={cardSubtitle}>
            Vi erbjuder dig en nyckelroll i bolaget och tillsammans med VD:n
            jobbar ni för en framtida utveckling och tillväxt genom att bryta ny
            mark och utöka kundstocken. Du får en roll med stor frihet och
            möjlighet att själv påverka dina resultat och din inkomst. Du utgår
            från vårt kontor i Täby alternativt från ett hemmakontor.
          </p>
        </span>
      </div>
      <div style={cardContainer}>
        <span style={cardTitle}>ARBETSUPPGIFTER</span>
      </div>
      <div style={cardContainer}>
        <div style={card}>
          <span style={cardSubtitle}>
            Som säljare hos oss har du huvudansvar för prospektering, kontakt,
            mötesbokning och ibland även besök hos nya kunder. Du kommer att få
            göra kalkyleringar samt hjälpa till med offert- och avtalsskrivning.
            Som stöd i ditt arbete har du en referensbank med många nöjda kunder
            och en VD som har en stor branschkunskap att dela med sig av.{" "}
            <p> </p>
            <span style={cardTitle}>KRAVPROFIL</span>
            <p>
              Vi söker dig som är en driven säljare med förmåga att själv
              planera ditt arbete och skapa affärer. I rollen ska du själv bygga
              upp en kundstock och tillbringa mycket tid med att prospektera och
              ta kontakt med beslutsfattare på företag i Stockholmsområdet.{" "}
              <p></p> Du måste därför triggas av kontakten med människor och att
              leta nya affärsmöjligheter. Vi vill att du har erfarenhet av
              uppsökande försäljning och kan visa på framgång i tidigare
              säljroller eller som innesäljare/mötesbokare.
            </p>
          </span>
        </div>
        <div style={card}>
          <span style={cardSubtitle}>
            Ditt främsta verktyg blir telefonen men du ska även kunna driva och
            delta i egna kundmöten vid behov. Som person har du stor social
            kompetens, hög energinivå och en ambition att bidra med öppningar
            till nya affärsmöjligheter. <p></p>
            <span style={cardTitle}>ANSÖKAN</span>
            <p>
              Vill du bidra till vår fortsatta expansion och samtidigt få ett
              spännande och utmanande arbete i ett bolag med höga krav på
              kvalitet och kundnöjdhet?
            </p>
            <p>
              Ansök genom att maila din ansökan i form av ett personligt brev
              och CV till info@ccservice.se, märk ansökan med referensnummer
              6484. Intervjuer och urval sker löpande så ansök snarast möjligt.
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
  padding: 20,
  width: "75%",
  marginBottom: 20,
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

export default LedigaJobb;
