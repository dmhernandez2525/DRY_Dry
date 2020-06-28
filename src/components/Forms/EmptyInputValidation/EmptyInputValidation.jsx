import React from "react";

import "./EmptyInputValidation.scss";

const EmptyInputValidation = ({
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
      onClick={() => onClick("DryEmptyInputValidation")}
      className="dry-emptyInputValidation"
    >
      DryEmptyInputValidation
    </div>
  );
};

EmptyInputValidation.defaultProps = {
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

export default EmptyInputValidation;
