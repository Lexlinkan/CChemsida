import React from "react";
import './about.css';
import Navbar from "../Navbar/Navbar";

// Bilder
import omOss from "../assets/omOss.jpeg";

const About = () => {
  return (
    <div className="bodyAbout">
      <Navbar />
      <img src={omOss} style={{ width: "75%" }} alt="Våra Tjänster image" />
      <div className="spanContainerAbout">
        <span className="titleAbout">Ett städbolag att lita på</span>
        <span className="subtitleAbout">
          CC Service är ett mindre städbolag med det stora företagets kompetens
          och erfarenhet. Vi erbjuder olika städtjänster hos privata företag
          samt hushållsnära tjänster till privatpersoner. Vi är certifierade
          enligt ISO 9001:2015 och ISO 14001:2015. CC Service strävar efter att
          vara en attraktiv arbetsgivare och ett företag med god etik.
        </span>
      </div>
      <div className="cardContainerAbout">
        <div className="cardAbout">
          <span className="cardTitleAbout">
            OM OSS
            <p className="cardSubtitleAbout">
              CC Service startades 2014 men har en gedigen och lång erfarenhet.
              Våra kunder finns i Storstockholm inom såväl den privata som den
              offentliga sektorn. Vi strävar efter att erbjuda hushållsnära
              tjänster med hög kvalitet.
            </p>
            <p className="cardSubtitleAbout">
              Vår affärsidé är att utföra miljöanpassad lokalvård och andra
              servicetjänster med kvalitet och bra kundservice. Vår
              konkurrenskraft fokuseras på vårt kunnande, vårt engagemang, våra
              resurser och våra priser.
            </p>
            <p className="cardSubtitleAbout">
              Framförallt arbetar vi för att skapa en ökad kundnöjdhet, men även
              för att hitta en hållbar utveckling för företaget. Vi vill ha
              motiverade medarbetare som trivs med att jobba hos oss.
            </p>
          </span>
        </div>
        <div className="cardAbout1">
          <span className="cardSubtitleAbout">
            <span className="cardTitleAbout1">VÅRA POLICYS</span>
            <ul>
              <li>
                <p className="policyTitleAbout">
                  KVALITETSPOLICY
                  {
                    "- att uppfylla kunders krav/behov i rätt tid, på rätt sätt och med hög och jämn kvalitet."
                  }
                </p>
              </li>
              <li>
                <p className="policyTitleAbout">
                  MILJÖPOLICY
                  {
                    "- minska miljöpåverkan genom mindre förorening, avfall och användning av naturresurser."
                  }
                </p>
              </li>
              <li>
                <p className="policyTitleAbout">
                  PERSONALPOLICY
                  {
                    "- skapa kompetenta/engagerade medarbetare, som kan bidra till företagets utveckling. "
                  }
                </p>
              </li>
              <li>
                <p className="policyTitleAbout">
                  ARBETSMILJÖPOLICY
                  {
                    "– skall leda till ett gott arbetsklimat, bra hälsa, låg sjukfrånvaro och få arbetsskador."
                  }
                </p>
              </li>
              <li>
                <p className="policyTitleAbout">
                  JÄMSTÄLLDHETSPOLICY
                  {
                    "– ett målinriktat jämställdhetsarbete med lika möjlighet till anställning och befordran."
                  }
                </p>
              </li>
              <li>
                <p className="policyTitleAbout">
                  DROGPOLICY
                  {
                    "– alkohol/droger ska inte användas. Vi förebygger och motverkar missbruksproblem."
                  }
                </p>
              </li>
              <li>
                <p className="policyTitleAbout">
                  ETIKPOLICY
                  {
                    "– vi ska präglas av god etik, bry oss om vår omvärld, respektera mänskliga rättigheter och stå för löften. KRÄNKANDE SÄRBEHANDLING OCH SEXUELLA TRAKASSERIER – kränkande särbehandling, mobbning eller sexuella trakasserier tolereras ej på våra arbetsplatser."
                  }
                </p>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
