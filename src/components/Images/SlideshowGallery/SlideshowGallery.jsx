import React from "react";

import "./SlideshowGallery.scss";

const SlideshowGallery = ({
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
      onClick={() => onClick("DrySlideshowGallery")}
      className="dry-slideshowGallery"
    >
      DrySlideshowGallery
    </div>
  );
};

SlideshowGallery.defaultProps = {
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

export default SlideshowGallery;
