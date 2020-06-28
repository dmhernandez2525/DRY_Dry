import React from "react";

import "./ImageComparisonSlider.scss";

const ImageComparisonSlider = ({
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
      onClick={() => onClick("DryImageComparisonSlider")}
      className="dry-imageComparisonSlider"
    >
      DryImageComparisonSlider
    </div>
  );
};

ImageComparisonSlider.defaultProps = {
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

export default ImageComparisonSlider;
