import React from "react";

import "./ImageOverlayFade.scss";

const ImageOverlayFade = ({
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
      onClick={() => onClick("DryImageOverlayFade")}
      className="dry-imageOverlayFade"
    >
      DryImageOverlayFade
    </div>
  );
};

ImageOverlayFade.defaultProps = {
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

export default ImageOverlayFade;
