import React from "react";

import "./ImageOverlayIcon.scss";

const ImageOverlayIcon = ({
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
      onClick={() => onClick("DryImageOverlayIcon")}
      className="dry-imageOverlayIcon"
    >
      DryImageOverlayIcon
    </div>
  );
};

ImageOverlayIcon.defaultProps = {
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

export default ImageOverlayIcon;
