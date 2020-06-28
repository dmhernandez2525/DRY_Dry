import React from "react";

import "./FourColumnLayout.scss";

const FourColumnLayout = ({
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
      onClick={() => onClick("DryFourColumnLayout")}
      className="dry-fourColumnLayout"
    >
      DryFourColumnLayout
    </div>
  );
};

FourColumnLayout.defaultProps = {
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

export default FourColumnLayout;
