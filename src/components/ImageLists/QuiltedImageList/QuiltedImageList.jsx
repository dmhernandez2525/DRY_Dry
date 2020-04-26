import React from "react";

import "./QuiltedImageList.scss";

const QuiltedImageList = ({
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
      onClick={() => onClick("DryQuiltedImageList")}
      className="dry-quiltedImageList"
    >
      DryQuiltedImageList
    </div>
  );
};

QuiltedImageList.defaultProps = {
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

export default QuiltedImageList;
