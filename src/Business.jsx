import React from "react";
import business from "./assets/homePageF.jpeg";
import logoHome from "./assets/CCS_COLOR.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import kundIFokus from "./assets/kund_i_fokus.jpeg";
import kvalitetMiljo from "./assets/miljö_&_hållbarhet.jpeg";
import offertImg from "./assets/offertImg.jpeg";
import { Link } from "react-router-dom";
import Tjanster from "./Tjanster";

const Business = () => {
  return (
    <div>
      <div style={body}>
        <div style={nav}>
          <Link to="/tjanster" element={<Tjanster />}>
            <span style={navItem}>VÅRA TJÄNSTER</span>
          </Link>
          <span style={navItem}>MARKSERVICE</span>
          <span style={navItem}>REFERENSER</span>
          <span style={navItem}>KVALITET & MILJÖ</span>
          <span style={navItem}>BEGÄR OFFERT</span>
          <span style={navItem}>LEDIGA JOBB</span>
          <span style={navItem}>OM OSS</span>
          <span style={navItem}>KONTAKT</span>
        </div>
        <div style={topContainer}>
          <img style={logo} src={logoHome} alt="" />
          <div style={topRight}>
            <span style={title}>Företag</span>
            <span style={subtitle}>
              Gå till Privat
              <ArrowForwardIcon style={{ verticalAlign: "middle" }} />
            </span>
          </div>
        </div>
        <div>
          <img src={business} alt="Business image" />
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
          <img
            style={{ width: 350, height: 300 }}
            src={kundIFokus}
            alt="Kund i Fokus"
          />
          <img style={{ width: 350, height: 300 }} src={kvalitetMiljo} alt="" />
          <img style={{ width: 350, height: 300 }} src={offertImg} alt="" />
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
  height: "vh",
};

const topContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 20,
  width: "100%",
  marginBottom: 20,
  marginLeft: 180,
  marginRight: 180,
};

const topRight = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const logo = {
  width: 150,
  height: 150,
  marginTop: 25,
};

const title = {
  fontSize: 40,
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  fontSize: 57,
  fontWeight: 500,
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
  alignItems: "center",
  flexDirection: "row",
  padding: 20,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  fontSize: 20,
  fontWeight: 500,
  backgroundColor: "#f2f2f2",
  width: "100%",
};

const navItem = {
  transition: "transform 0.2s ease-in-out",
  cursor: "pointer",
};

const cardContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
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
  fontFamily: "dosis, sans-serif",
  color: "#999a9a",
  margin: 15,
  letterSpacing: 1,
};

const imageContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "row",
  width: "75%",
  marginBottom: 70,
};
