import React from "react";

import "./OutlinedButton.scss";

const OutlinedButton = ({
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
  passProps
}) => {
  return (
    <div
      onClick={() => onClick("DryOutlinedButton")}
      className="dry-outlinedButton"
    >
      DryOutlinedButton
    </div>
  );
};

OutlinedButton.defaultProps = {
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

export default OutlinedButton;
