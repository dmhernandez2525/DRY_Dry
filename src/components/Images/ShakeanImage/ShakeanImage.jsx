import React from "react";

import "./ShakeanImage.scss";

const ShakeanImage = ({
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
      onClick={() => onClick("DryShakeanImage")}
      className="dry-shakeanImage"
    >
      DryShakeanImage
    </div>
  );
};

ShakeanImage.defaultProps = {
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

export default ShakeanImage;
