import React from "react";

import "./ToggleHideShow.scss";

const ToggleHideShow = ({
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
      onClick={() => onClick("DryToggleHideShow")}
      className="dry-toggleHideShow"
    >
      DryToggleHideShow
    </div>
  );
};

ToggleHideShow.defaultProps = {
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

export default ToggleHideShow;
