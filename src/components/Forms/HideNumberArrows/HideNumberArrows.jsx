import React from "react";

import "./HideNumberArrows.scss";

const HideNumberArrows = ({
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
      onClick={() => onClick("DryHideNumberArrows")}
      className="dry-hideNumberArrows"
    >
      DryHideNumberArrows
    </div>
  );
};

HideNumberArrows.defaultProps = {
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

export default HideNumberArrows;
