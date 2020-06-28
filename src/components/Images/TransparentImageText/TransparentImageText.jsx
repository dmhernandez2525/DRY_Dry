import React from "react";

import "./TransparentImageText.scss";

const TransparentImageText = ({
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
      onClick={() => onClick("DryTransparentImageText")}
      className="dry-transparentImageText"
    >
      DryTransparentImageText
    </div>
  );
};

TransparentImageText.defaultProps = {
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

export default TransparentImageText;
