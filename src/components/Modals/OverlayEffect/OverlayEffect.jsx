import React from "react";

import "./OverlayEffect.scss";

const OverlayEffect = ({
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
      onClick={() => onClick("DryOverlayEffect")}
      className="dry-overlayEffect"
    >
      DryOverlayEffect
    </div>
  );
};

OverlayEffect.defaultProps = {
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

export default OverlayEffect;
