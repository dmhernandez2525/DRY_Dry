import React from "react";

import "./DryButton.scss";

const DryButton = ({
  id,
  name,
  userTip,
  onClick,
  onChange,
  onBlur,
  onFocus,
  disable,
  errorMes,
  styles,
  passProps,
  text = "Button",
  className = "btn btn-animated",
  color = "white",
  variant = "",
  ref
}) => {
  return (
    <div onClick={() => onClick("DryDryButton")} className="dry-dryButton">
      <a
        ref={ref}
        variant={variant}
        href="#"
        className={`${className} btn-${color}`}
        onClick={onClick}
      >
        {text}
      </a>
    </div>
  );
};

DryButton.defaultProps = {
  id: "",
  name: "",
  userTip: "",
  onClick: null,
  onChange: null,
  onBlur: null,
  disable: false,
  className: "",
  errorMes: "",
  styles: null,
  passProps: null
};

export default DryButton;
