import React from "react";

import "./NavigationRail.scss";

const NavigationRail = ({
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
      onClick={() => onClick("DryNavigationRail")}
      className="dry-navigationRail"
    >
      DryNavigationRail
    </div>
  );
};

NavigationRail.defaultProps = {
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

export default NavigationRail;
