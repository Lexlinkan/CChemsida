import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./tjanster.css";
// Bilder
import varaTjanster from "../assets/vara-tjanster.jpeg";
import overlayimgF from "../assets/rotatedOverlayImg.png";


const Tjanster = () => {
  return (
    <div className="bodyTjanster">
      <Navbar />
      <div className="businessImgContainerTjanster">
            <img className="businessImgTjanster" src={varaTjanster} alt="Business" />
        </div>
      <div className="spanContainerTjanster">
        <span className="titleTjanster">Service som lever upp till dina krav</span>
        <span className="subtitleTjanster">
          Våra kompetenta och engagerade medarbetare är de som bidrar till
          företagets utveckling. Det innebär att vi kan garantera en hög
          kvalitet och servicegrad. Men för att du ska bli övertygad så kan du
          givetvis testa oss innan du bestämmer dig!
        </span>
      </div>
      <div className="cardContainerTjanster">
        <span className="cardTitle">VÅRA FÖRETAGSTJÄNSTER</span>
      </div>
      <div className="cardContainerTjanster">
        <div className="cardTjanster">
          <span className="cardSubtitleTjanster">
            CC Service är ett lokalvårdsföretag med ett brett utbud av olika
            tjänster. Vi städar både kontor, hotell, trappor, skolor, etc. <p></p> För
            oss är det alltid viktigt att upprätthålla en hög kvalitet och en
            bra kundservice. Vår erfarenhet och vårt engagemang gör att vi kan
            erbjuda kundanpassade lösningar med bästa möjliga service.
            Miljöanpassad lokalvård är en självklarhet för oss och vi använder
            alltid bara miljömedvetna och miljömärkta metoder och kemikalier.
            <p>
              Våra resurser och priser gör oss konkurrenskraftiga på marknaden,
              men vi vill såklart att våra kunder ska känns sig trygga med oss
              som samarbetspartner. Långsiktiga relationer skapas genom
              förtroende. För att kunna känna på samarbetet och hitta ett
              fungerande tillvägagångssätt innan man tecknar några löpande
              avtal, erbjuder vi även engångstjänster.
            </p>
          </span>
        </div>
        <div className="cardTjanster">
        <span className="cardSubtitleTjanster">
            Förutom våra ordinarie tjänster erbjuder vi även olika typer av
            specialstädning så som:
            <ul>
              <li>golvvård</li>
              <li>storstädning</li>
              <li>fönsterputs</li>
              <li>entrémattor</li>
              <li>flyttstädning</li>
              <li>mattvätt</li>
              <li>m.m</li>
            </ul>
            Oavsett vad ni har behov av så är ni välkomna att höra av er så
            kollar vi på en möjlig lösning!
          </span>
        </div>
      </div>
      <Link to="/kontakt">
        <button className="buttonTjanster">Kontakta oss</button>
      </Link>
    </div>
  );
};

export default Tjanster;
