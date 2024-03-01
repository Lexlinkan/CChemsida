import React from "react";
import business from "./assets/homePageF.jpeg";
import logoHome from "./assets/CCS_COLOR.png";
import kundIFokus from "./assets/kund_i_fokus.jpeg";
import kvalitetMiljo from "./assets/miljö_&_hållbarhet.jpeg";
import offertImg from "./assets/offertImg.jpeg";
import { Link } from "react-router-dom";
import overlayimgF from "./assets/homepageFöretag.png";

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
              src={business}
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
          </div>
          <div style={card}>
            <span style={cardTitle}>Service som lever upp till dina krav</span>
            <p style={cardSubtitle}>
              Våra kompetenta och engagerade medarbetare är de som bidrar till
              företagets utveckling. Det innebär att vi kan garantera en hög
              kvalitet och servicegrad. Men för att du ska bli övertygad så kan
              du givetvis testa oss innan du bestämmer dig!
            </p>
          </div>
        </div>
        <div style={imageContainer}>
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
          <div style={{ position: "relative" }}>
            <Link to="/tjanster">
              <img style={{ width: 350, height: 300 }} src={offertImg} alt="" />
              <button style={buttonStyle}>Läs Mer</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;

const body = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100vh",
};

const topContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,
  width: "75%",
  marginBottom: 20,
};

const text = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const textTitle = {
  fontSize: 45,
  fontFamily: "dosis, sans-serif", // Updated to Dosis font
  color: "#999a9a",
  margin: 15,
  letterSpacing: 1.5,
};

const textSubtitle = {
  fontSize: 45,
  fontFamily: "dosis, sans-serif", // Updated to Dosis font
  color: "#999a9a",
  margin: 15,
  letterSpacing: 1.5,
  marginBottom: 50,
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
  fontSize: 40,
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  fontSize: 57,
  fontWeight: 500,
  marginTop: 40,
};

const subtitle = {
  fontSize: 25,
  cursor: "pointer",
  fontFamily: "dosis, sans-serif",
  color: "#999a9a",
};

const nav = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColoe: "lightgreen",
  alignItems: "center",
  flexDirection: "row",
  padding: 20,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  fontSize: 20,
  fontWeight: 500,
  width: "78%",
  textDecoration: "none",
};

const navItem = {
  transition: "transform 0.2s ease-in-out",
  cursor: "default",
  textDecoration: "none",
};

const businessImg = {
  position: "relative",
  display: "flex",
};

const overLayF = {
  position: "absolute",
  bottom: 0,
  left: 0,
  marginLeft: -1,
  marginBottom: 40,
};

const cardContainer = {
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  padding: 20,
  paddintBottom: 0,
  width: "75%",
};

const card = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  width: 350,
};

const cardTitle = {
  fontSize: 25,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  margin: 15,
};

const cardSubtitle = {
  fontSize: 15,
  fontFamily: "Merriweather, serif",
  color: "#999a9a",
  margin: 15,
  letterSpacing: 2,
};

const imageContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "row",
  width: "75%",
  marginBottom: 70,
};

const buttonStyle = {
  position: "absolute",
  top: 5,
  left: 5,
  padding: "4px 8px",
  background: "rgba(0, 37, 84, 0.7)",
  color: "#fff",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  fontFamily: "dosis, sans-serif",
  transition: "background-color 0.3s ease",
};

const linkStyle = {
  textDecoration: "none",
  color: "#002554",
  fontSize: 20,
  fontWeight: 500,
  fontFamily: "dosis, sans-serif",
};


const mediaQueries = {
  tablet: "@media only screen and (max-width: 1024px)",
  mobile: "@media only screen and (max-width: 600px)",
};

const businessImgResponsive = {
  [mediaQueries.tablet]: {
    width: "90vw",
  },
  [mediaQueries.mobile]: {
    width: "100vw",
  },
};