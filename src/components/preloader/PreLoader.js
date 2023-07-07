import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/index.js";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>WELCOME</span>
        <span>TO</span>
        <span>MY</span>
        <span>SITE</span>
      </div>
    </div>
  );
};

export default PreLoader;
