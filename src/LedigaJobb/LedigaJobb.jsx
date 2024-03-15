import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './LedigaJobb.css';

// Bilder
import logoHome from "../assets/CCS_COLOR.png";
import ledigaJobbImg from "../assets/lediga-jobb.jpg";


const LedigaJobb = () => {
  return (
    <div className="bodyLJ">
      <Navbar />
      <img
        src={ledigaJobbImg}
        style={{ width: "75%" }}
        alt="Våra Tjänster image"
      />
      <div className="spanContainerLJ">
        <span className="titleLJ">
          Vill du jobba på CC Service? Vi har nu två lediga tjänster - en driven
          säljare och en ambitiös supervisor!
        </span>
        <span className="subtitleLJ">
          Är du en duktig, målmedveten och tävlingsinriktad säljare som vill
          arbeta med försäljning av våra tjänster och mötesbokning med
          intressanta kundprospekt? Hos oss får du jobba med ett expansivt
          städbolag med gott renommé. <p></p> Eller är du en stresstålig,
          ambitiös och noggrann supervisor som vill arbeta ute hos en av våra
          kunder?{" "}
          <p className="cardSubtitleLJ">
            Vi erbjuder dig en nyckelroll i bolaget och tillsammans med VD:n
            jobbar ni för en framtida utveckling och tillväxt genom att bryta ny
            mark och utöka kundstocken. Du får en roll med stor frihet och
            möjlighet att själv påverka dina resultat och din inkomst. Du utgår
            från vårt kontor i Täby alternativt från ett hemmakontor.
          </p>
        </span>
      </div>
      <div className="cardContainerLJ">
        <span className="cardTitleLJ">ARBETSUPPGIFTER</span>
      </div>
      <div className="cardContainerLJ">
        <div className="cardLJ">
          <span className="cardSubtitleLJ">
            Som säljare hos oss har du huvudansvar för prospektering, kontakt,
            mötesbokning och ibland även besök hos nya kunder. Du kommer att få
            göra kalkyleringar samt hjälpa till med offert- och avtalsskrivning.
            Som stöd i ditt arbete har du en referensbank med många nöjda kunder
            och en VD som har en stor branschkunskap att dela med sig av.{" "}
            <p> </p>
            <span className="cardTitleLJ">KRAVPROFIL</span>
            <p>
              Vi söker dig som är en driven säljare med förmåga att själv
              planera ditt arbete och skapa affärer. I rollen ska du själv bygga
              upp en kundstock och tillbringa mycket tid med att prospektera och
              ta kontakt med beslutsfattare på företag i Stockholmsområdet.{" "}
              <p></p> Du måste därför triggas av kontakten med människor och att
              leta nya affärsmöjligheter. Vi vill att du har erfarenhet av
              uppsökande försäljning och kan visa på framgång i tidigare
              säljroller eller som innesäljare/mötesbokare.
            </p>
          </span>
        </div>
        <div className="cardLJ">
          <span className="cardSubtitleLJ">
            Ditt främsta verktyg blir telefonen men du ska även kunna driva och
            delta i egna kundmöten vid behov. Som person har du stor social
            kompetens, hög energinivå och en ambition att bidra med öppningar
            till nya affärsmöjligheter. <p></p>
            <span className="cardTitleLJ">ANSÖKAN</span>
            <p>
              Vill du bidra till vår fortsatta expansion och samtidigt få ett
              spännande och utmanande arbete i ett bolag med höga krav på
              kvalitet och kundnöjdhet?
            </p>
            <p>
              Ansök genom att maila din ansökan i form av ett personligt brev
              och CV till info@ccservice.se, märk ansökan med referensnummer
              6484. Intervjuer och urval sker löpande så ansök snarast möjligt.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LedigaJobb;
