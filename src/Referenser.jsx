import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoHome from "./assets/CCS_COLOR.png";
import kundIFokus from "./assets/kund_i_fokus.jpeg";
import { Link } from "react-router-dom";
import Kontakt from "./Kontakt";
import Markservice from "./Markservice";
import Tjanster from "./Tjanster";
import KvalitetMiljo from "./KvalitetMiljo";
import LedigaJobb from "./LedigaJobb";
import About from "./About";
import Offert from "./Offert";

// Bilder till kungloggotyper
import abbvie from "./assets/abbvie.jpg";
import claraLogo from "./assets/clara-logo.jpg";
import hotellSkeppsholmen from "./assets/hotell_skeppsholmen_logo-390x238.jpg";
import logo20170227182418 from "./assets/logo-20170227182418.png";
import nobisLogotypjpg2jpeg from "./assets/nobis_logotypjpg2jpeg.jpg";
import stallmastaregardenLogo from "./assets/stallmastaregarden_logo.gif";
import einarMattson from "./assets/print-logo.jpg";
import j from "./assets/200_logo_1330680504.jpg";

const Referenser = () => {
  return (
    <div style={body}>
      <div style={topContainer}>
        {/* <span style={title}>Referenser</span> */}
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
        </Link>{" "}
        <Link to="/kontakt" element={<Kontakt />}>
          <span style={navItem}>KONTAKT</span>
        </Link>
      </div>
      <img
        src={kundIFokus}
        style={{ width: "75%" }}
        alt="Våra Tjänster image"
      />
      <div style={spanContainer}>
        <span style={title}>Kunden i fokus</span>
        <span style={subtitle}>
          Hög tillgänglighet och flexibilitet är viktiga faktorer i vårt dagliga
          arbete. Även med mycket kort varsel kan vi snabbt vara på plats. Men
          det handlar också om snabb återkoppling vid eventuell reklamation.
        </span>
      </div>
      <div style={cardContainer}>
        <span style={cardTitle}>ARBETSSÄTT OCH VÄRDERINGAR</span>
      </div>
      <div style={cardContainer}>
        <div style={card}>
          <span style={cardSubtitle}>
            Vi vill att våra kunder ska kunna lita på oss. Vår höga
            leveranssäkerhet och kvalitetssäkring har gjort att vi byggt upp ett
            bra nät av kundreferenser. Vi arbetar med ständiga förbättringar
            vilket bland annat innebär att ställa krav på våra leverantörer, men
            även att skapa en god arbetsmiljö för våra medarbetare. Detta ska
            vara en avgörande orsak till varför kunderna väljer oss.
          </span>
        </div>
        <div style={card}>
          <span style={cardSubtitle}>
            Vi vill ha en öppen information för att tydligt förmedla en trygg
            och ärlig samarbetspartner. Nedan kan ni se några av de kunder som
            vi jobbar med. Har ni några specifika önskemål så ta gärna kontakt
            med oss så kan vi berätta mer om liknande case och kundönskemål vi
            utfört.
          </span>
        </div>
      </div>
      <div>
        <span style={cardTitle}>NÅGRA FÖRETAG SOM VI JOBBAR MED</span>
      </div>
      <div style={iconContainer}>
        <img style={icons} src={j} alt="J" />
        <img style={icons} src={abbvie} alt="Abbvie" />
        <img style={icons} src={claraLogo} alt="Miss Clara" />
        <img style={icons} src={hotellSkeppsholmen} alt="Skeppsholmen" />
      </div>
      <div style={iconContainer}>
        <img style={icons} src={logo20170227182418} alt="Operakällaren" />
        <img style={icons} src={nobisLogotypjpg2jpeg} alt="Nobis" />
        <img src={stallmastaregardenLogo} alt="Stallmästargården" />
        <img style={icons} src={einarMattson} alt="Einar & Mattson" />
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

const iconContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "75%",
  marginBottom: 50,
  marginTop: 50,
};

const icons = {
  width: 190,
  height: 120,
  margin: 10,
};

export default Referenser;
