import React from "react";

import "./FullscreenWindow.scss";

const FullscreenWindow = ({
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
      onClick={() => onClick("DryFullscreenWindow")}
      className="dry-fullscreenWindow"
    >
      DryFullscreenWindow
    </div>
  );
};

FullscreenWindow.defaultProps = {
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

export default FullscreenWindow;
