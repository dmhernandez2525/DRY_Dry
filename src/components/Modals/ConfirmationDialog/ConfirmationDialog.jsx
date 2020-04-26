import React from "react";

import "./ConfirmationDialog.scss";

const ConfirmationDialog = ({
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
      onClick={() => onClick("DryConfirmationDialog")}
      className="dry-confirmationDialog"
    >
      DryConfirmationDialog
    </div>
  );
};

ConfirmationDialog.defaultProps = {
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

export default ConfirmationDialog;
