import React from "react";

import "./ZigZagLayout.scss";

const ZigZagLayout = ({
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
      onClick={() => onClick("DryZigZagLayout")}
      className="dry-zigZagLayout"
    >
      DryZigZagLayout
    </div>
  );
};

ZigZagLayout.defaultProps = {
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

export default ZigZagLayout;
