import React from "react";

import "./StickyImage.scss";

const StickyImage = ({
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
    <div onClick={() => onClick("DryStickyImage")} className="dry-stickyImage">
      DryStickyImage
    </div>
  );
};

StickyImage.defaultProps = {
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

export default StickyImage;
