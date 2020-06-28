import React from "react";

import "./ImageMagnifierGlass.scss";

const ImageMagnifierGlass = ({
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
      onClick={() => onClick("DryImageMagnifierGlass")}
      className="dry-imageMagnifierGlass"
    >
      DryImageMagnifierGlass
    </div>
  );
};

ImageMagnifierGlass.defaultProps = {
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

export default ImageMagnifierGlass;
