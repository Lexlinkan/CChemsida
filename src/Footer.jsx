import React from "react";

export const Footer = () => {
  return (
    <div style={style}>
      <span style={hzLine}></span>
      <span style={span}>CC Service AB</span>
      <span style={span}>Enhagsvägen 18</span>
      <span style={span}>187 40 Täby</span>
      <span style={span}>08-506 363 88</span>
      <span style={span}>info@ccservice.se</span>
      <span style={hzLine}></span>
    </div>
  );
};

const style = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  height: 50,
  borderTop: "1px solid #ddd",
  backgroundColor: "#f2f2f2",
  marginTop: 50,
};

const span = {
  color: '#999a9a'
};

const hzLine = {
  width: 200,
  height: 1,
  backgroundColor: '#999a9a',
  margin: 0,
  padding: 0,
};

export default Footer;
