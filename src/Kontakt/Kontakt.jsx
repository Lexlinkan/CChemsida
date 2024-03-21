import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './kontakt.css';

// Bilder
import kontaktImg from "../assets/kontakt.jpeg";



const Kontakt = () => {
  return (
    <div className="bodyKontakt">
      <Navbar />

      <img src={kontaktImg} style={{ width: "75%" }} alt="Kontakt image" />
      <div className="spanContainerKontakt">
        <span className="titleKontakt">Kontakta oss</span>
        <span className="subtitleKontakt">
          Vi strävar efter att hitta långsiktiga samarbeten som fungerar för
          alla parter. Är det något ni funderar över eller om ni vill veta mer
          om hur vi jobbar eller våra tjänster, tveka inte att kontakta oss!
        </span>
      </div>
      <div className="underSpanContainerKontakt">
        <span className="cardTitleKontakt">CC Service AB</span>
        <span className="cardSubtitleKontakt">Enhagsvägen 18, 187 40 Täby</span>
      </div>
      <div className="underSpanContainerKontakt">
        <span className="cardTitleKontakt">Telefon</span>
        <span className="cardSubtitleKontakt">08-506 363 88</span>
      </div>
      <div className="underSpanContainerKontakt">
        <span className="cardTitleKontakt">Mail</span>
        <span className="cardSubtitleKontakt">info@ccservice.se</span>
        <Link to="/offert">
          <button className="buttonKontakt">Offertförfrågan</button>
        </Link>
      </div>
    </div>
  );
};

export default Kontakt;
