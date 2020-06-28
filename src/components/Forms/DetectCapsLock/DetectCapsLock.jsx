import React from "react";

import "./DetectCapsLock.scss";

const DetectCapsLock = ({
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
      onClick={() => onClick("DryDetectCapsLock")}
      className="dry-detectCapsLock"
    >
      DryDetectCapsLock
    </div>
  );
};

DetectCapsLock.defaultProps = {
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

export default DetectCapsLock;
