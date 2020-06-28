import React from "react";

import "./AvatarImages.scss";

const AvatarImages = ({
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
      onClick={() => onClick("DryAvatarImages")}
      className="dry-avatarImages"
    >
      DryAvatarImages
    </div>
  );
};

AvatarImages.defaultProps = {
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

export default AvatarImages;
