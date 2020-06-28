import React from "react";

import "./BorderAroundImage.scss";

const BorderAroundImage = ({
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
      onClick={() => onClick("DryBorderAroundImage")}
      className="dry-borderAroundImage"
    >
      DryBorderAroundImage
    </div>
  );
};

BorderAroundImage.defaultProps = {
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

export default BorderAroundImage;
