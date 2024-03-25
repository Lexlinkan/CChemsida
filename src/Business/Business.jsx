import React from "react";
import { Link } from "react-router-dom";
import "./business.css";
import Navbar from "../Navbar/Navbar";

// Bilder
import foretag from "../assets/homePageF.jpeg";
import kundIFokus from "../assets/kund_i_fokus.jpeg";
import kvalitetMiljo from "../assets/miljö_&_hållbarhet.jpeg";
import offertImg from "../assets/offertImg.jpeg";

const Business = () => {
  return (
    <div>
      <div className="body">
        <Navbar />
        <div className="businessImgContainer">
            <img className="businessImg" src={foretag} alt="Business" />
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
