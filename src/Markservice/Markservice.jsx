import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './markservice.css';

// Bilder
import logoHome from "../assets/CCS_COLOR.png";
import markImg from "../assets/markservice.jpeg";
import markImg1 from "../assets/markservice1.jpeg";

const Markservice = () => {
  return (
    <div className="bodyMark">
      <Navbar />
      <div className="markImage">
        <img src={markImg} style={{ width: "85%" }} alt="Markservice image" />
        <img
          src={markImg1}
          style={{ width: "85%" }}
          alt="Markservice image 1"
        />
      </div>
      <div className="spanContainerMark">
        <span className="titleMark">
          Skötsel och underhåll av din fastighetstomt – året runt
        </span>
        <span className="subtitleMark">
          Vi förstår vikten av ett prydligt första intryck när det gäller ditt
          företags utemiljö och fastighetsmark. Därför erbjuder vi utöver våra
          städtjänster, heltäckande tjänster inom markservice för hela året.
        </span>
      </div>
      <div className="cardContainerMark">
        <span className="cardTitleMark">MARKSERVICE EFTER DINA KRAV OCH ÖNSKEMÅL</span>
      </div>
      <div className="cardContainerMark">
        <div className="cardMark">
          <span className="cardSubtitleMark">
            En välskött trädgård för din hyresfastighet eller planläggning av en
            ny fastighetstomt – vi anpassar våra tjänster efter dina behov. Vi
            har en hög kvalitets- och servicenivå och erbjuder hantering av
            större trädgårdsarbete året runt. Det kan innebära allt från
            beskärning av träd, snöröjning och halkbekämpning m.m. Vi sköter
            plantering samt underhåll och städning i den form som passar er
            utemiljö. Tillsammans kommer vi överens om hur ett löpande samarbete
            kan utformas.
          </span>
        </div>
        <div className="cardMark">
          <span className="cardSubtitleMark">
            Hög flexibilitet och snabb service är en självklarhet. Oavsett ditt
            behov hittar vi alltid en bra lösning. Välkommen att höra av dig!
          </span>
        </div>
      </div>
      <Link to="/kontakt">
        <button className="buttonMark">Kontakta Oss</button>
      </Link>
    </div>
  );
};

export default Markservice;
