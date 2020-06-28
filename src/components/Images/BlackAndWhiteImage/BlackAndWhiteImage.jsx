import React from "react";

import "./BlackAndWhiteImage.scss";

const BlackAndWhiteImage = ({
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
      onClick={() => onClick("DryBlackAndWhiteImage")}
      className="dry-blackAndWhiteImage"
    >
      DryBlackAndWhiteImage
    </div>
  );
};

BlackAndWhiteImage.defaultProps = {
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

export default BlackAndWhiteImage;
