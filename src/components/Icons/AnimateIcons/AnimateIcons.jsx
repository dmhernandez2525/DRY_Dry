import React from "react";

import "./AnimateIcons.scss";

const AnimateIcons = ({
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
      onClick={() => onClick("DryAnimateIcons")}
      className="dry-animateIcons"
    >
      DryAnimateIcons
    </div>
  );
};

AnimateIcons.defaultProps = {
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

export default AnimateIcons;
