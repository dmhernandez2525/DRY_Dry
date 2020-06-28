import React from "react";

import "./FullscreenVideo.scss";

const FullscreenVideo = ({
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
      onClick={() => onClick("DryFullscreenVideo")}
      className="dry-fullscreenVideo"
    >
      DryFullscreenVideo
    </div>
  );
};

FullscreenVideo.defaultProps = {
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

export default FullscreenVideo;
