import React from "react";

import "./TogglePasswordVisibility.scss";

const TogglePasswordVisibility = ({
  id,
  name,
  userTip,
  onClick,
  onChange,
  onBlur,
  onFocus,
  disable,
  className,
  errorMes,
  styles,
  passProps,
}) => {
  return (
    <div
      onClick={() => onClick("DryTogglePasswordVisibility")}
      className="dry-togglePasswordVisibility"
    >
      DryTogglePasswordVisibility
    </div>
  );
};

TogglePasswordVisibility.defaultProps = {
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
  passProps: null,
};

export default TogglePasswordVisibility;
