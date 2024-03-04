import React from "react";
import { span, style, hzLine } from "./styles";


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

export default Footer;
