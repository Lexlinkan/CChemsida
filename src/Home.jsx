import React from "react";
import { Link } from "react-router-dom";
import overlayimgF from "./assets/homepageFöretag.png";
import overlayimgP from "./assets/homepagePrivat.png";
import logoHome from "./assets/CCS_COLOR.png";
import business from "./assets/homePageF.jpeg";
import privat from "./assets/homepageP.jpeg";
import Business from "./Business";

const Home = () => {
  return (
    <div style={homePage}>
      <div>
        <Link to="/">
          <img style={logo} src={logoHome} alt="Logga" />
        </Link>
      </div>
      <div style={hero}>
        <div style={businessImg}>
          <Link to="/business" element={<Business />}>
            <img
              style={{ width: 700, height: 450, margin: 15 }}
              src={business}
              alt="Business"
            />
            <div style={overLayF}>
              <img src={overlayimgF} alt="Overlay img Business" />
              <span style={spanStyleF}>Företag</span>
            </div>
          </Link>
        </div>
        <Link to="/privat">
        <div style={privateImg}>
          <img
            style={{ width: 700, height: 450, margin: 15 }}
            src={privat}
            alt="Private"
          />
          <div style={overlayPContainer}>
            <img style={overlayP} src={overlayimgP} alt="overlay img Private" />
            <span style={spanStyleP}>Privat</span>
          </div>
        </div>
        </Link>
      </div>
      <div style={text}>
        <span style={title}>Välkommen till ett städbolag du kan lita på</span>
        <span style={subtitle}>“Era förväntningar – vårt mål"</span>
      </div>
    </div>
  );
};

const logo = {
  with: 300,
  height: 200,
  marginTop: 25,
};

const homePage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
};

const hero = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  padding: 25,
};

const businessImg = {
  position: "relative",
  display: "flex",
};

const overLayF = {
  position: "absolute",
  bottom: 0,
  left: 0,
  marginLeft: 14,
  marginBottom: 15,
};

const privateImg = {
  position: "relative",
  display: "flex",
};

const overlayPContainer = {
  position: "relative",
};

const overlayP = {
  position: "absolute",
  top: 0,
  right: 0,
  margin: 15,
};

const spanStyleP = {
  position: "absolute",
  top: 0,
  right: 0,
  margin: 45,
  color: "white",
  fontWeight: 700,
  fontSize: 25,
  fontFamily: "dosis, sans-serif", // Updated to Dosis font
};
const spanStyleF = {
  position: "absolute",
  bottom: 0,
  left: 0,
  margin: 40,
  color: "white",
  fontWeight: 700,
  fontSize: 25,
  fontFamily: "dosis, sans-serif", // Updated to Dosis font
};

const text = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const title = {
  fontSize: 45,
  fontFamily: "dosis, sans-serif", // Updated to Dosis font
  color: "#999a9a",
  margin: 15,
  letterSpacing: 1.5,
};

const subtitle = {
  fontSize: 45,
  fontFamily: "dosis, sans-serif", // Updated to Dosis font
  color: "#999a9a",
  margin: 15,
  letterSpacing: 1.5,
  marginBottom: 50,
};

export default Home;
