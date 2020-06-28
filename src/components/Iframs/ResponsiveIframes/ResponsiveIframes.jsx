import React from "react";

import "./ResponsiveIframes.scss";

const ResponsiveIframes = ({
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
      onClick={() => onClick("DryResponsiveIframes")}
      className="dry-responsiveIframes"
    >
      DryResponsiveIframes
    </div>
  );
};

ResponsiveIframes.defaultProps = {
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

export default ResponsiveIframes;
