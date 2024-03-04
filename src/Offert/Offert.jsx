import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { body, logo, title, subtitle, spanContainer, cardContainer, card, cardComment, cardSubtitle, nav, navItem, button, linkStyle } from "./styles";

// Bilder
import logoHome from "../assets/CCS_COLOR.png";
import offertImg from "../assets/offert.jpeg";

export const Offert = () => {
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
      <img src={offertImg} style={{ width: "75%" }} alt="Våra Tjänster image" />
      <div style={spanContainer}>
        <span style={title}>Skicka en offertförfrågan</span>
      </div>
      <div style={cardContainer}>
        <span style={subtitle}>
          Vi lägger stor vikt vid att skapa ett ömsesidigt förtroende och
          strävar alltid efter långsiktiga relationer. Därför vill vi såklart
          hitta en så bra lösning som möjligt efter just era önskemål. <p></p>
          <p style={cardSubtitle}>
            Fyll i vårt formulär så återkommer vi med en offert!
          </p>
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

export default Offert;
