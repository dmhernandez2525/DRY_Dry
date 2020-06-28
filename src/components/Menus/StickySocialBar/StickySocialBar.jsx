import React from "react";

import "./StickySocialBar.scss";

const StickySocialBar = ({
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
      onClick={() => onClick("DryStickySocialBar")}
      className="dry-stickySocialBar"
    >
      DryStickySocialBar
    </div>
  );
};

StickySocialBar.defaultProps = {
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

export default StickySocialBar;
