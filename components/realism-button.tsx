import React from "react";
import "./realism-button.css";
const RealismButton = ({ text }: { text: string }) => {
  return (
    <button className="button">
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="inner">{text}</div>
    </button>
  );
};

export default RealismButton;
