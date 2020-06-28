import React from "react";

import "./ImageOverlayZoom.scss";

const ImageOverlayZoom = ({
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
      onClick={() => onClick("DryImageOverlayZoom")}
      className="dry-imageOverlayZoom"
    >
      DryImageOverlayZoom
    </div>
  );
};

ImageOverlayZoom.defaultProps = {
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

export default ImageOverlayZoom;
