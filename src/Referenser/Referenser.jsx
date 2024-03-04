import React from "react";
import { Link } from "react-router-dom";
import { body, logo, nav, linkStyle, navItem, spanContainer, title, subtitle, cardContainer, cardTitle, card, cardSubtitle, button, iconContainer, icons } from "./styles";

// Bilder 
import logoHome from "../assets/CCS_COLOR.png";
import kundIFokus from "../assets/kund_i_fokus.jpeg";
import abbvie from "../assets/abbvie.jpg";
import claraLogo from "../assets/clara-logo.jpg";
import hotellSkeppsholmen from "../assets/hotell_skeppsholmen_logo-390x238.jpg";
import logo20170227182418 from "../assets/logo-20170227182418.png";
import nobisLogotypjpg2jpeg from "../assets/nobis_logotypjpg2jpeg.jpg";
import stallmastaregardenLogo from "../assets/stallmastaregarden_logo.gif";
import einarMattson from "../assets/print-logo.jpg";
import j from "../assets/200_logo_1330680504.jpg";

const Referenser = () => {
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
      <Link to="/kontakt" >
        <button style={button}>Kontakta Oss</button>
      </Link>
    </div>
  );
};

export default Referenser;
