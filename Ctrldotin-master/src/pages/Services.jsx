import React from "react";
import { ThreeDCardDemo } from "../pages/Card";
import "./style.css";
import { SparklesPreview } from "../pages/WhatWeDoTitle";

const Services = () => {
  return (
    <div className="services">
      <SparklesPreview />
      <div className="services-container">
        <ThreeDCardDemo
          title="Web Development"
          subtitle="We build websites"
          image="/assets/img-1.png"
          className="service-card-1 service-card"
        />
        <ThreeDCardDemo
          title="Video Editing"
          subtitle="We help you make marketing reels and videos"
          image="/assets/img-3.png"
          className="service-card-3 service-card"
        />
        <ThreeDCardDemo
          title="Posts and Logo Design"
          subtitle="We design posts and logos for your brand"
          image="/assets/img-4.png"
          className="service-card-4 service-card"
        />
        <ThreeDCardDemo
          title="App Development"
          subtitle="Coming soon..."
          image="/assets/img-2.png"
          className="service-card-2 service-card"
        />
      </div>
    </div>
  );
};

export default Services;
