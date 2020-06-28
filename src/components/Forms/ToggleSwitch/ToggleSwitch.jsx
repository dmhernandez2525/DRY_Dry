import React from "react";

import "./ToggleSwitch.scss";

const ToggleSwitch = ({
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
      onClick={() => onClick("DryToggleSwitch")}
      className="dry-toggleSwitch"
    >
      DryToggleSwitch
    </div>
  );
};

ToggleSwitch.defaultProps = {
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

export default ToggleSwitch;
