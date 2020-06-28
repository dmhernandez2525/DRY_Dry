import React from "react";

import "./RangeSliders.scss";

const RangeSliders = ({
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
      onClick={() => onClick("DryRangeSliders")}
      className="dry-rangeSliders"
    >
      DryRangeSliders
    </div>
  );
};

RangeSliders.defaultProps = {
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

export default RangeSliders;
