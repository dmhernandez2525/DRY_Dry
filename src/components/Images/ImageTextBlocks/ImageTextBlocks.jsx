import React from "react";

import "./ImageTextBlocks.scss";

const ImageTextBlocks = ({
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
      onClick={() => onClick("DryImageTextBlocks")}
      className="dry-imageTextBlocks"
    >
      DryImageTextBlocks
    </div>
  );
};

ImageTextBlocks.defaultProps = {
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

export default ImageTextBlocks;
