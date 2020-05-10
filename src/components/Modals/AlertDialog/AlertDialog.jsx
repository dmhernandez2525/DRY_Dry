import React from "react";

import "./AlertDialog.scss";

const AlertDialog = ({
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
    <div onClick={() => onClick("DryAlertDialog")} className="dry-alertDialog">
      DryAlertDialog
    </div>
  );
};

AlertDialog.defaultProps = {
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

export default AlertDialog;
