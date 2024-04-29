import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./offert.css";
import Navbar from "../Navbar/Navbar";
// Bilder
import offertImg from "../assets/offert.jpeg";

const Offert = () => {
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
    <div className="bodyOffert">
      <Navbar />
      <img src={offertImg} style={{ width: "75%" }} alt="Våra Tjänster image" />
      <div className="spanContainerOffert">
        <span className="titleOffert">Skicka en offertförfrågan</span>
      </div>
      <div className="cardContainerOffert">
        <span className="subtitleOffert">
          Vi lägger stor vikt vid att skapa ett ömsesidigt förtroende och
          strävar alltid efter långsiktiga relationer. Därför vill vi såklart
          hitta en så bra lösning som möjligt efter just era önskemål. <p></p>
          <p className="cardSubtitleOffert">
            Fyll i vårt formulär så återkommer vi med en offert!
          </p>
        </span> 

        <form
          className="form"
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Företag</label>
          <input className="cardOffert" type="text" name="user_name" />
          <label>Kontaktperson</label>
          <input className="cardOffert" type="email" name="user_email" />
          <label>Telefon:</label>
          <input className="cardOffert" type="text" name="Telefon" />
          <label>E-post:</label>
          <input className="cardOffert" type="text" name="Email" />
          <label>Adress:</label>
          <input className="cardOffert" type="text" name="Adress" />
          <label>Postnummer:</label>
          <input className="cardOffert" type="text" name="Postnummer" />
          <label>Ort:</label>
          <input className="cardOffert" type="text" name="Ort" />
          <label>Kommentar:</label>
          <input className="cardCommentOffert" type="text" name="Kommentar" />
          <input className="buttonOffert" type="submit" value="Skicka" />
        </form>
      </div>
    </div>
  );
};

export default Offert;
