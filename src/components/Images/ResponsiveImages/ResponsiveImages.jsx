import React from "react";

import "./ResponsiveImages.scss";

const ResponsiveImages = ({
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
      onClick={() => onClick("DryResponsiveImages")}
      className="dry-responsiveImages"
    >
      DryResponsiveImages
    </div>
  );
};

ResponsiveImages.defaultProps = {
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

export default ResponsiveImages;
