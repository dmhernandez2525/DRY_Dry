import React from "react";

import "./ChangeBgonScroll.scss";

const ChangeBgonScroll = ({
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
      onClick={() => onClick("DryChangeBgonScroll")}
      className="dry-changeBgonScroll"
    >
      DryChangeBgonScroll
    </div>
  );
};

ChangeBgonScroll.defaultProps = {
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

export default ChangeBgonScroll;
