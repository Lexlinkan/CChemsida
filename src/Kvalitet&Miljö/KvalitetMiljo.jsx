import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./kvalitetMiljo.css";

// Bilder
import kvalitet_Miljo from "../assets/miljö_&_hållbarhet.jpeg";
import isoCert from "../assets/cc-ISO-merge-3.png";
import isoCert1 from "../assets/cc-ISO-merge-11.jpg";

const KvalitetMiljo = () => {
  return (
    <div className="bodyKM">
      <Navbar />
      <img
        src={kvalitet_Miljo}
        style={{ width: "75%" }}
        alt="Våra Tjänster image"
      />
      <div className="isoCertContainerKM">
        <div className="spanContainerKM">
          <span className="titleKM">Miljö och hållbarhet i fokus</span>
          <span className="subtitleKM">
            Vår affärsidé är att utföra miljöanpassad lokalvård och andra
            servicetjänster med hög kvalitet och med ett professionellt
            kundbemötande. Ett miljömedvetet tänk är ständigt närvarande i vårt
            dagliga arbete. Vi är kvalitets- och miljöcertifierade enligt ISO
            9001:2015 och 14001:2015, vilket vi är väldigt stolta över. Miljön
            är vår framtid.
          </span>
        </div>
        <div className="isoImage">
          <div className="isoCertImageContainerKM">
            <img
              className="isoImage"
              src={isoCert}
              alt="ISO Certificat image"
            />
            <img
              className="isoImage"
              src={isoCert1}
              alt="ISO Certificat image1"
            />
          </div>
          <Link to="https://ccservice.se/assets/Certifikat%202020.pdf">
            <button className="buttonKM">Se våra Certifikat</button>
          </Link>
        </div>
      </div>
      <div className="cardContainerKM">
        <span className="cardTitleKM">VÅRT KVALITETS- OCH MILJÖARBETE</span>
      </div>
      <div className="cardContainerKM">
        <div className="cardKM">
          <span className="cardSubtitleKM">
            ISO 9001:2015 är världens mest etablerade ramverk för kvalitet.
            Certifikatet garanterar att vi erbjuder en produkt som uppfyller
            myndighetskrav och att vi arbetar för en ökad kundtillfredsställelse
            och motiverad personal.
            <p>
              Vi är stolta över vårt certifikat, men kvalitet för oss är mycket
              mer än så. Vi vill att företaget utvecklas och är lönsamt, och
              inte minst att våra medarbetare är motiverade och trivs med att
              arbeta hos oss.
            </p>
            <p>
              ISO 14001:2015 innebär att CC Service tar ansvar för miljön
              gentemot kunder, personal och ägare. Vi arbetar aktivt för att
              använda miljömedvetna metoder i vårt dagliga arbete, vi följer upp
              och vidareutvecklar vår miljöpolicy och vi har detaljerade
              miljömål.
            </p>
            <p>
              Hållbar utveckling handlar inte bara om en god miljö, utan växer
              fram i samspelet mellan ekologisk, ekonomisk och social
              hållbarhet. Det är väldigt viktigt för oss.
            </p>
          </span>
        </div>
        <div className="cardKM1">
          <span className="cardSubtitleKM">
            I en så pass tuff bransch som lokalvård är arbetsmiljön extra viktig
            att ta hänsyn till. På CC Service genomför vi åtgärder för att
            förebygga ohälsa och olycksfall. Vi utbildar även vår personal om
            risker och förebyggande av arbetsskador, kemiska hälsorisker m.m.
            <p>
              Detta innebär att vi kan hålla en hög kvalitet och skapa
              motivation som leder till bra samarbeten. En gemensam hög
              servicegrad bland alla anställda är också en del som vi
              prioriterar och kontinuerligt kontrollerar att vi följer.
            </p>
            <p>
              I vår etikpolicy har vi fastställt att vi ska ta ett
              samhällsansvar, att bry oss om vår omvärld, respektera mänskliga
              rättigheter och kontinuerligt arbeta med hållbarhet. Vi tror att
              det är den bästa vägen till en lyckad verksamhet med nöjda kunder.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default KvalitetMiljo;
