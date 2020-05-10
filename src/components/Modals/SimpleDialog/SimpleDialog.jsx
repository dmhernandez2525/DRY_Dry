import React from "react";

import "./SimpleDialog.scss";

const SimpleDialog = ({
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
  passProps
}) => {
  return (
    <div
      onClick={() => onClick("DrySimpleDialog")}
      className="dry-simpleDialog"
    >
      DrySimpleDialog
    </div>
  );
};

SimpleDialog.defaultProps = {
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
  passProps: null
};

export default SimpleDialog;
