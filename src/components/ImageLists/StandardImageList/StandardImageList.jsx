import React from "react";

import "./StandardImageList.scss";

const StandardImageList = ({
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
    <div
      onClick={() => onClick("DryStandardImageList")}
      className="dry-standardImageList"
    >
      DryStandardImageList
    </div>
  );
};

StandardImageList.defaultProps = {
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

export default StandardImageList;
