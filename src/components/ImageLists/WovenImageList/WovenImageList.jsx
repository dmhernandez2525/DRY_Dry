import React from "react";

import "./WovenImageList.scss";

const WovenImageList = ({
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
      onClick={() => onClick("DryWovenImageList")}
      className="dry-wovenImageList"
    >
      DryWovenImageList
    </div>
  );
};

WovenImageList.defaultProps = {
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

export default WovenImageList;
