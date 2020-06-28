import React from "react";

import "./TabGallery.scss";

const TabGallery = ({
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
    <div onClick={() => onClick("DryTabGallery")} className="dry-tabGallery">
      DryTabGallery
    </div>
  );
};

TabGallery.defaultProps = {
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

export default TabGallery;
