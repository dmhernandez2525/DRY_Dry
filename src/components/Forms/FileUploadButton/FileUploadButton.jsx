import React from "react";

import "./FileUploadButton.scss";

const FileUploadButton = ({
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
      onClick={() => onClick("DryFileUploadButton")}
      className="dry-fileUploadButton"
    >
      DryFileUploadButton
    </div>
  );
};

FileUploadButton.defaultProps = {
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

export default FileUploadButton;
