import React from "react";
import "./DryButton.scss";

const DryButton = ({
  text = "Button",
  onClick,
  className = "btn btn-animated",
  color = "white"
}) => {
  return (
    <a href="#" className={`${className} btn-${color}`} onClick={onClick}>
      {text}
    </a>
  );
};
export default DryButton;
