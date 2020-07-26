import React from "react";

import "./ClosableListItems.scss";

const ClosableListItems = ({
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
      onClick={() => onClick("DryClosableListItems")}
      className="dry-closableListItems"
    >
      DryClosableListItems
    </div>
  );
};

ClosableListItems.defaultProps = {
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

export default ClosableListItems;
