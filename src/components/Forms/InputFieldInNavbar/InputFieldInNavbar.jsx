import React from "react";

import "./InputFieldInNavbar.scss";

const InputFieldInNavbar = ({
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
      onClick={() => onClick("DryInputFieldInNavbar")}
      className="dry-inputFieldInNavbar"
    >
      DryInputFieldInNavbar
    </div>
  );
};

InputFieldInNavbar.defaultProps = {
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

export default InputFieldInNavbar;
