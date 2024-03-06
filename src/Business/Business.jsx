// Bilder
import foretag from "../assets/homePageF.jpeg";
import logoHome from "../assets/CCS_COLOR.png";
import kundIFokus from "../assets/kund_i_fokus.jpeg";
import kvalitetMiljo from "../assets/miljö_&_hållbarhet.jpeg";
import offertImg from "../assets/offertImg.jpeg";
import overlayimgF from "../assets/homepageFöretag.png";

import React from "react";
import { Link } from "react-router-dom";
import "./business.css";

const Business = () => {
  return (
    <div>
      <div className="body">
        <Link to="/">
          <img className="logo" src={logoHome} alt="Logga" />
        </Link>
        <div className="nav">
          <Link className="linkStyle" to="/tjanster">
            <span className="navItem">VÅRA TJÄNSTER</span>
          </Link>
          <Link className="linkStyle" to="/markservice">
            <span className="navItem">MARKSERVICE</span>
          </Link>
          <Link className="linkStyle" to="/referenser">
            <span className="navItem">REFERENSER</span>
          </Link>
          <Link className="linkStyle" to="/kvalitetmiljo">
            <span className="navItem">KVALITET & MILJÖ</span>
          </Link>
          <Link className="linkStyle" to="/offert">
            <span className="navItem">BEGÄR OFFERT</span>
          </Link>{" "}
          <Link className="linkStyle" to="/ledigajobb">
            <span className="navItem">LEDIGA JOBB</span>
          </Link>
          <Link className="linkStyle" to="/omoss">
            <span className="navItem">OM OSS</span>
          </Link>
          <Link className="linkStyle" to="/kontakt">
            <span className="navItem">KONTAKT</span>
          </Link>
        </div>

        <div className="businessImgContainer">
          <Link to="/business" element={<Business />}>
            <img className="businessImg" src={foretag} alt="Business" />
            <div className="overLayF">
              <img className="overLayFImg" src={overlayimgF} alt="Overlay img Business" />
            </div>
          </Link>
        </div>

        <div className="text">
          <span className="textTitle">
            Välkommen till ett städbolag du kan lita på
          </span>
          <span className="textSubtitle">“Era förväntningar – vårt mål"</span>
        </div>

        <div className="cardContainer">
          <div className="card">
            <span className="cardTitle">Kunden i fokus</span>
            <p className="cardSubtitle">
              Hög tillgänglighet och flexibilitet är viktiga faktorer i vårt
              dagliga arbete. Även med mycket kort varsel kan vi snabbt vara på
              plats. Men det handlar också om snabb återkoppling vid eventuell
              reklamation.
            </p>
            <div style={{ position: "relative" }}>
              <Link to="/referenser">
                <img className="cardImage" src={kundIFokus} alt="" />
                <button className="buttonStyle">Läs Mer</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <span className="cardTitle">Kvalitet och miljö</span>
            <p className="cardSubtitle">
              Vår affärsidé är att utföra miljöanpassad lokalvård och andra
              servicetjänster med hög kvalitet och professionellt kundbemötande.
              Ett miljömedvetet tänk är ständigt närvarande i vårt dagliga
              arbete. Vi är miljöcertifierade enligt ISO 9001:2015 och
              14001:2015, vilket vi är väldigt stolta över. Miljön är vår
              framtid.
            </p>
            <div style={{ position: "relative" }}>
              <Link to="/kvalitetmiljo">
                <img className="cardImage" src={kvalitetMiljo} alt="" />
                <button className="buttonStyle">Läs Mer</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <span className="cardTitle">
              Service som lever upp till dina krav
            </span>
            <p className="cardSubtitle">
              Våra kompetenta och engagerade medarbetare är de som bidrar till
              företagets utveckling. Det innebär att vi kan garantera en hög
              kvalitet och servicegrad. Men för att du ska bli övertygad så kan
              du givetvis testa oss innan du bestämmer dig!
            </p>
            <div style={{ position: "relative" }}>
              <Link to="/tjanster">
                <img className="cardImage" src={offertImg} alt="" />
                <button className="buttonStyle">Läs Mer</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
