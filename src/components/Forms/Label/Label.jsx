import React from "react";

import "./Label.scss";

const Label = ({
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
    <div onClick={() => onClick("DryLabel")} className="dry-label">
      DryLabel
    </div>
  );
};

Label.defaultProps = {
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

export default Label;
