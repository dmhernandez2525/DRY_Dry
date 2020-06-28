import React from "react";

import "./FullscreenSearch.scss";

const FullscreenSearch = ({
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
      onClick={() => onClick("DryFullscreenSearch")}
      className="dry-fullscreenSearch"
    >
      DryFullscreenSearch
    </div>
  );
};

FullscreenSearch.defaultProps = {
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

export default FullscreenSearch;
