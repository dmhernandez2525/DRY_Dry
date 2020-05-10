import React from "react";

import "./Banner.scss";

const Banner = ({
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
  passProps
}) => {
  return (
    <div onClick={() => onClick("DryBanner")} className="dry-banner">
      DryBanner
    </div>
  );
};

Banner.defaultProps = {
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
  passProps: null
};

export default Banner;
