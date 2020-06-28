import React from "react";

import "./Scrollable.scss";

const Scrollable = ({
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
    <div onClick={() => onClick("DryScrollable")} className="dry-scrollable">
      DryScrollable
    </div>
  );
};

Scrollable.defaultProps = {
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

export default Scrollable;
