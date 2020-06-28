import React from "react";

import "./ThreeColumnLayout.scss";

const ThreeColumnLayout = ({
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
      onClick={() => onClick("DryThreeColumnLayout")}
      className="dry-threeColumnLayout"
    >
      DryThreeColumnLayout
    </div>
  );
};

ThreeColumnLayout.defaultProps = {
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

export default ThreeColumnLayout;
