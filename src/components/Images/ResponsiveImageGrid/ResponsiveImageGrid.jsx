import React from "react";

import "./ResponsiveImageGrid.scss";

const ResponsiveImageGrid = ({
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
      onClick={() => onClick("DryResponsiveImageGrid")}
      className="dry-responsiveImageGrid"
    >
      DryResponsiveImageGrid
    </div>
  );
};

ResponsiveImageGrid.defaultProps = {
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

export default ResponsiveImageGrid;
