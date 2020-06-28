import React from "react";

import "./ImageOverlaySlide.scss";

const ImageOverlaySlide = ({
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
      onClick={() => onClick("DryImageOverlaySlide")}
      className="dry-imageOverlaySlide"
    >
      DryImageOverlaySlide
    </div>
  );
};

ImageOverlaySlide.defaultProps = {
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

export default ImageOverlaySlide;
