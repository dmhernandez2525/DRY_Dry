import React from "react";

import "./PillNavigation.scss";

const PillNavigation = ({
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
      onClick={() => onClick("DryPillNavigation")}
      className="dry-pillNavigation"
    >
      DryPillNavigation
    </div>
  );
};

PillNavigation.defaultProps = {
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

export default PillNavigation;
