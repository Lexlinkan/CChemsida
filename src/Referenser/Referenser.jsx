import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './referenser.css';

// Bilder
import kundIFokus from "../assets/kund_i_fokus.jpeg";
import abbvie from "../assets/abbvie.jpg";
import claraLogo from "../assets/clara-logo.jpg";
import hotellSkeppsholmen from "../assets/hotell_skeppsholmen_logo-390x238.jpg";
import logo20170227182418 from "../assets/logo-20170227182418.png";
import nobisLogotypjpg2jpeg from "../assets/nobis_logotypjpg2jpeg.jpg";
import stallmastaregardenLogo from "../assets/stallmastaregarden_logo.gif";
import einarMattson from "../assets/print-logo.jpg";
import j from "../assets/200_logo_1330680504.jpg";

const Referenser = () => {
  return (
    <div className="bodyRef">
      <Navbar />
      <img
        src={kundIFokus}
        style={{ width: "75%" }}
        alt="Våra Tjänster image"
      />
      <div className="spanContainerRef">
        <span className="titleRef">Kunden i fokus</span>
        <span className="subtitleRef">
          Hög tillgänglighet och flexibilitet är viktiga faktorer i vårt dagliga
          arbete. Även med mycket kort varsel kan vi snabbt vara på plats. Men
          det handlar också om snabb återkoppling vid eventuell reklamation.
        </span>
      </div>
      <div className="cardContainerRef">
        <span className="cardTitleRef">ARBETSSÄTT OCH VÄRDERINGAR</span>
      </div>
      <div className="cardContainerRef">
        <div className="cardRef">
          <span className="cardSubtitleRef">
            Vi vill att våra kunder ska kunna lita på oss. Vår höga
            leveranssäkerhet och kvalitetssäkring har gjort att vi byggt upp ett
            bra nät av kundreferenser. Vi arbetar med ständiga förbättringar
            vilket bland annat innebär att ställa krav på våra leverantörer, men
            även att skapa en god arbetsmiljö för våra medarbetare. Detta ska
            vara en avgörande orsak till varför kunderna väljer oss.
          </span>
        </div>
        <div className="cardRef">
          <span className="cardSubtitleRef">
            Vi vill ha en öppen information för att tydligt förmedla en trygg
            och ärlig samarbetspartner. Nedan kan ni se några av de kunder som
            vi jobbar med. Har ni några specifika önskemål så ta gärna kontakt
            med oss så kan vi berätta mer om liknande case och kundönskemål vi
            utfört.
          </span>
        </div>
      </div>
      <div>
        <span className="cardTitleRef">NÅGRA FÖRETAG SOM VI JOBBAR MED</span>
      </div>
      <div className="iconContainerRef">
        <img className="iconsRef" src={j} alt="J" />
        <img className="iconsRef" src={abbvie} alt="Abbvie" />
        <img className="iconsRef" src={claraLogo} alt="Miss Clara" />
        <img className="iconsRef" src={hotellSkeppsholmen} alt="Skeppsholmen" />
      </div>
      <div className="iconContainerRef">
        <img className="iconsRef" src={logo20170227182418} alt="Operakällaren" />
        <img className="iconsRef" src={nobisLogotypjpg2jpeg} alt="Nobis" />
        <img className="iconsRef" src={stallmastaregardenLogo} alt="Stallmästargården" />
        <img className="iconsRef" src={einarMattson} alt="Einar & Mattson" />
      </div>
      <Link to="/kontakt">
        <button className="buttonRef">Kontakta Oss</button>
      </Link>
    </div>
  );
};

export default Referenser;
