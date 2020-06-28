import React from "react";

import "./ResponsiveForm.scss";

const ResponsiveForm = ({
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
      onClick={() => onClick("DryResponsiveForm")}
      className="dry-responsiveForm"
    >
      DryResponsiveForm
    </div>
  );
};

ResponsiveForm.defaultProps = {
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

export default ResponsiveForm;
