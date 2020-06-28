import React from "react";

import "./GetIframeElements.scss";

const GetIframeElements = ({
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
      onClick={() => onClick("DryGetIframeElements")}
      className="dry-getIframeElements"
    >
      DryGetIframeElements
    </div>
  );
};

GetIframeElements.defaultProps = {
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

export default GetIframeElements;
