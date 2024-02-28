import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoHome from "./assets/CCS_COLOR.png";
import varaTjanser from "./assets/vara-tjanster.jpeg";
import { Link } from "react-router-dom";
import Kontakt from "./Kontakt";
import Markservice from "./Markservice";
import Referenser from "./Referenser";
import KvalitetMiljo from "./KvalitetMiljo";
import LedigaJobb from "./LedigaJobb";
import About from "./About";
import Tjanster from "./Tjanster";
import intresseImg from "./assets/intresse.jpeg";
import PrisLista from "./PrisLista";

export const Intesseanmälan = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div style={body}>
      <div style={topContainer}>
        {/* <span style={title}>Våra Tjänster</span> */}
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
      <img
        src={intresseImg}
        style={{ width: "75%" }}
        alt="Våra Tjänster image"
      />
      <div style={spanContainer}>
        <span style={title}>Skicka en intresseanmälan</span>
      </div>
      <div style={cardContainer}>
        <span style={subtitle}>
          Vi lägger stor vikt vid att skapa ett ömsesidigt förtroende och
          strävar alltid efter långsiktiga relationer. Därför vill vi såklart
          hitta en så bra lösning som möjligt efter just era önskemål. <p></p>
          <p style={cardSubtitle}>Fyll i vårt formulär så hör vi av oss! </p>
        </span>

        <form
          style={{ display: "flex", flexDirection: "column", width: "45%" }}
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Företag</label>
          <input style={card} type="text" name="user_name" />
          <label>Kontaktperson</label>
          <input style={card} type="email" name="user_email" />
          <label>Telefon:</label>
          <input style={card} type="text" name="Telefon" />
          <label>E-post:</label>
          <input style={card} type="text" name="Email" />
          <label>Adress:</label>
          <input style={card} type="text" name="Adress" />
          <label>Postnummer:</label>
          <input style={card} type="text" name="Postnummer" />
          <label>Ort:</label>
          <input style={card} type="text" name="Ort" />
          <label>Kommentar</label>
          <input style={cardComment} type="text" name="Kommentar" />
          <input style={button} type="submit" value="Skicka" />
        </form>
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
  marginBottom: 30,
};

const cardContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "75%",
  gap: 20,
};

const card = {
  display: "flex",
  flexDirection: "row",
  width: 400,
  marginBottom: 10,
  height: 40,
};
const cardComment = {
  display: "flex",
  flexDirection: "row",
  width: 400,
  marginBottom: 10,
  height: 150,
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
  marginTop: 20,
  marginBottom: 20,
  transition: "transform 0.2s ease-in-out",
};

export default Intesseanmälan;
