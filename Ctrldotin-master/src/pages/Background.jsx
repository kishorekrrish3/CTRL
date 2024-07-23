import React from "react";
import "./style.css";
import { FlipWordsDemo } from "./FlipWords";

const Background = () => {
  return (
    <div className="iframe-container">
      <iframe
        src="https://my.spline.design/lostorbinthemountains-dc545f2e6edc04de1d838941545ea6f2/"
        frameborder="0"
        className="home-background"
      ></iframe>
      <FlipWordsDemo />
    </div>
  );
};

export default Background;
``;
