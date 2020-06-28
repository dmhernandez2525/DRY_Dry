import React from "react";

import "./RoundedImages.scss";

const RoundedImages = ({
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
      onClick={() => onClick("DryRoundedImages")}
      className="dry-roundedImages"
    >
      DryRoundedImages
    </div>
  );
};

RoundedImages.defaultProps = {
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

export default RoundedImages;
