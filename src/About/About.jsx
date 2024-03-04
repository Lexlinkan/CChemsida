import React from "react";
import { Link } from "react-router-dom";
import { body, logo, nav, navItem, spanContainer, title, subtitle, policyTitle, cardContainer, card, cardTitle, cardSubtitle, linkStyle } from "./styles";

import logoHome from "../assets/CCS_COLOR.png";
import omOss from "../assets/omOss.jpeg";

const About = () => {
  return (
    <div style={body}>
      <Link to="/">
        <img style={logo} src={logoHome} alt="Logga" />
      </Link>
      <div style={nav}>
        <Link style={linkStyle} to="/tjanster">
          <span style={navItem}>VÅRA TJÄNSTER</span>
        </Link>
        <Link style={linkStyle} to="/markservice">
          <span style={navItem}>MARKSERVICE</span>
        </Link>
        <Link style={linkStyle} to="/referenser">
          <span style={navItem}>REFERENSER</span>
        </Link>
        <Link style={linkStyle} to="/kvalitetmiljo">
          <span style={navItem}>KVALITET & MILJÖ</span>
        </Link>
        <Link style={linkStyle} to="/offert">
          <span style={navItem}>BEGÄR OFFERT</span>
        </Link>{" "}
        <Link style={linkStyle} to="/ledigajobb">
          <span style={navItem}>LEDIGA JOBB</span>
        </Link>
        <Link style={linkStyle} to="/omoss">
          <span style={navItem}>OM OSS</span>
        </Link>
        <Link style={linkStyle} to="/kontakt">
          <span style={navItem}>KONTAKT</span>
        </Link>
      </div>
      <img src={omOss} style={{ width: "75%" }} alt="Våra Tjänster image" />
      <div style={spanContainer}>
        <span style={title}>Ett städbolag att lita på</span>
        <span style={subtitle}>
          CC Service är ett mindre städbolag med det stora företagets kompetens
          och erfarenhet. Vi erbjuder olika städtjänster hos privata företag
          samt hushållsnära tjänster till privatpersoner. Vi är certifierade
          enligt ISO 9001:2015 och ISO 14001:2015. CC Service strävar efter att
          vara en attraktiv arbetsgivare och ett företag med god etik.
        </span>
      </div>
      <div style={cardContainer}>
        <div style={card}>
          <span style={cardTitle}>
            OM OSS
            <p style={cardSubtitle}>
              CC Service startades 2014 men har en gedigen och lång erfarenhet.
              Våra kunder finns i Storstockholm inom såväl den privata som den
              offentliga sektorn. Vi strävar efter att erbjuda hushållsnära
              tjänster med hög kvalitet.
            </p>
            <p style={cardSubtitle}>
              Vår affärsidé är att utföra miljöanpassad lokalvård och andra
              servicetjänster med kvalitet och bra kundservice. Vår
              konkurrenskraft fokuseras på vårt kunnande, vårt engagemang, våra
              resurser och våra priser.
            </p>
            <p style={cardSubtitle}>
              Framförallt arbetar vi för att skapa en ökad kundnöjdhet, men även
              för att hitta en hållbar utveckling för företaget. Vi vill ha
              motiverade medarbetare som trivs med att jobba hos oss.
            </p>
          </span>
        </div>
        <div style={card}>
          <span style={cardSubtitle}>
            <span style={cardTitle}>VÅRA POLICYS I SAMMANDRAG</span>
            <ul>
              <li>
                <p style={policyTitle}>
                  KVALITETSPOLICY
                  {
                    "- att uppfylla kunders krav/behov i rätt tid, på rätt sätt och med hög och jämn kvalitet."
                  }
                </p>
              </li>
              <li>
                <p style={policyTitle}>
                  MILJÖPOLICY
                  {
                    "- minska miljöpåverkan genom mindre förorening, avfall och användning av naturresurser."
                  }
                </p>
              </li>
              <li>
                <p style={policyTitle}>
                  PERSONALPOLICY
                  {
                    "- skapa kompetenta/engagerade medarbetare, som kan bidra till företagets utveckling. "
                  }
                </p>
              </li>
              <li>
                <p style={policyTitle}>
                  ARBETSMILJÖPOLICY
                  {
                    "– skall leda till ett gott arbetsklimat, bra hälsa, låg sjukfrånvaro och få arbetsskador."
                  }
                </p>
              </li>
              <li>
                <p style={policyTitle}>
                  JÄMSTÄLLDHETSPOLICY
                  {
                    "– ett målinriktat jämställdhetsarbete med lika möjlighet till anställning och befordran."
                  }
                </p>
              </li>
              <li>
                <p style={policyTitle}>
                  DROGPOLICY
                  {
                    "– alkohol/droger ska inte användas. Vi förebygger och motverkar missbruksproblem."
                  }
                </p>
              </li>
              <li>
                <p style={policyTitle}>
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
