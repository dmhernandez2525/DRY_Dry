import React from "react";

import "./TwoLineList.scss";

const TwoLineList = ({
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
    <div onClick={() => onClick("DryTwoLineList")} className="dry-twoLineList">
      DryTwoLineList
    </div>
  );
};

TwoLineList.defaultProps = {
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

export default TwoLineList;
