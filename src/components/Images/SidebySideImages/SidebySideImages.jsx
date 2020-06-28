import React from "react";

import "./SidebySideImages.scss";

const SidebySideImages = ({
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
      onClick={() => onClick("DrySidebySideImages")}
      className="dry-sidebySideImages"
    >
      DrySidebySideImages
    </div>
  );
};

SidebySideImages.defaultProps = {
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

export default SidebySideImages;
