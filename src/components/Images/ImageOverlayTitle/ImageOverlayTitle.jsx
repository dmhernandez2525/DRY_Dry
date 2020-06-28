import React from "react";

import "./ImageOverlayTitle.scss";

const ImageOverlayTitle = ({
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
      onClick={() => onClick("DryImageOverlayTitle")}
      className="dry-imageOverlayTitle"
    >
      DryImageOverlayTitle
    </div>
  );
};

ImageOverlayTitle.defaultProps = {
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

export default ImageOverlayTitle;
