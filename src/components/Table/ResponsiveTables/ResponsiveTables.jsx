import React from "react";

import "./ResponsiveTables.scss";

const ResponsiveTables = ({
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
      onClick={() => onClick("DryResponsiveTables")}
      className="dry-responsiveTables"
    >
      DryResponsiveTables
    </div>
  );
};

ResponsiveTables.defaultProps = {
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

export default ResponsiveTables;
