import React from "react";

import "./Button.scss";

const Button = ({
  id,
  name,
  onClick,
  onChange,
  onBlur,
  onFocus,
  disable,
  className,
  passProps
}) => {
  return <div className="dry-button">DryButton</div>;
};

Button.defaultProps = {
  id: "",
  name: "",
  onClick: null,
  onChange: null,
  onBlur: null,
  disable: false,
  className: "",
  passProps: null
};

export default Button;
