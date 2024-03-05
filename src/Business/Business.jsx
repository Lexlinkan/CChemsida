import React from "react";
import { Link } from "react-router-dom";
import { body, text, textTitle, textSubtitle, logo, nav, navItem, businessImg, overLayF, cardContainer, card, cardTitle, cardSubtitle, buttonStyle, linkStyle } from "./styles";
// Bilder
import foretag from "../assets/homePageF.jpeg";
import logoHome from "../assets/CCS_COLOR.png";
import kundIFokus from "../assets/kund_i_fokus.jpeg";
import kvalitetMiljo from "../assets/miljö_&_hållbarhet.jpeg";
import offertImg from "../assets/offertImg.jpeg";
import overlayimgF from "../assets/homepageFöretag.png";

const Business = () => {
  return (
    <div>
      <div style={body}>
        <Link to="/">
          <img style={logo} src={logoHome} alt="Logga" />
        </Link>
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

        <div style={businessImg}>
          <Link to="/business" element={<Business />}>
            <img
              style={{ width: "75vw", marginBottom: 40 }}
              src={foretag}
              alt="Business"
            />
            <div style={overLayF}>
              <img
                src={overlayimgF}
                style={{ width: "100%" }}
                alt="Overlay img Business"
              />
            </div>
          </Link>
        </div>

        <div style={text}>
          <span style={textTitle}>
            Välkommen till ett städbolag du kan lita på
          </span>
          <span style={textSubtitle}>“Era förväntningar – vårt mål"</span>
        </div>

        <div style={cardContainer}>
          <div style={card}>
            <span style={cardTitle}>Kunden i fokus</span>
            <p style={cardSubtitle}>
              Hög tillgänglighet och flexibilitet är viktiga faktorer i vårt
              dagliga arbete. Även med mycket kort varsel kan vi snabbt vara på
              plats. Men det handlar också om snabb återkoppling vid eventuell
              reklamation.
            </p>
            <div style={{ position: "relative" }}>
            <Link to="/referenser">
              <img
                style={{ width: 350, height: 300 }}
                src={kundIFokus}
                alt=""
              />
              <button style={buttonStyle}>Läs Mer</button>
            </Link>
          </div>
          </div>
          <div style={card}>
            <span style={cardTitle}>Kvalitet och miljö</span>
            <p style={cardSubtitle}>
              Vår affärsidé är att utföra miljöanpassad lokalvård och andra
              servicetjänster med hög kvalitet och professionellt kundbemötande.
              Ett miljömedvetet tänk är ständigt närvarande i vårt dagliga
              arbete. Vi är miljöcertifierade enligt ISO 9001:2015 och
              14001:2015, vilket vi är väldigt stolta över. Miljön är vår
              framtid.
            </p>
            <div style={{ position: "relative" }}>
            <Link to="/kvalitetmiljo">
              <img
                style={{ width: 350, height: 300 }}
                src={kvalitetMiljo}
                alt=""
              />
              <button style={buttonStyle}>Läs Mer</button>
            </Link>
          </div>
          </div>
          <div style={card}>
            <span style={cardTitle}>Service som lever upp till dina krav</span>
            <p style={cardSubtitle}>
              Våra kompetenta och engagerade medarbetare är de som bidrar till
              företagets utveckling. Det innebär att vi kan garantera en hög
              kvalitet och servicegrad. Men för att du ska bli övertygad så kan
              du givetvis testa oss innan du bestämmer dig!
            </p>
            <div style={{ position: "relative" }}>
            <Link to="/tjanster">
              <img style={{ width: 350, height: 300 }} src={offertImg} alt="" />
              <button style={buttonStyle}>Läs Mer</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
