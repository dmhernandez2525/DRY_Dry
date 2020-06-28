import React from "react";

import "./MultipleStepForm.scss";

const MultipleStepForm = ({
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
      onClick={() => onClick("DryMultipleStepForm")}
      className="dry-multipleStepForm"
    >
      DryMultipleStepForm
    </div>
  );
};

MultipleStepForm.defaultProps = {
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

export default MultipleStepForm;
