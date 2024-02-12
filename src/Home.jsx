import React from "react";
import overlayimgF from "./assets/homepageFöretag.png";
import overlayimgP from "./assets/homepagePrivat.png";
import logoHome from "./assets/CCS_COLOR.png";
import business from "./assets/homePageF.jpeg";
import privat from "./assets/homepageP.jpeg";

const Home = () => {
  return (
    <div style={homePage}>
      <div style={hero}>
        <div style={businessImg}>
          <img style={{width: 700, height: 450, margin: 15}} src={business} alt="Business" />
          <div style={overLayF}>
            <img src={overlayimgF} alt="Overlay img Business" />
            <span style={spanStyleF}>Företag</span>
          </div>
        </div>
        <div style={privateImg}>
          <img style={{width: 700, height: 450, margin: 15}} src={privat} alt="Private" />
          <div style={overlayPContainer}>
            <img
              style={overlayP}
              src={overlayimgP}
              alt="overlay img Private"
            />
            <span style={spanStyleP}>Privat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const homePage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
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
  marginBottom: 11
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
  margin: 15
};

const spanStyleP = {
  position: "absolute",
  top: 0,
  right: 0,
  margin: 45,
  color: "white",
  fontWeight: 700,
  fontSize: 25
};
const spanStyleF = {
  position: "absolute",
  bottom: 0,
  left: 0,
  margin: 45,
  color: "white",
  fontWeight: 700,
  fontSize: 25
};

export default Home;
