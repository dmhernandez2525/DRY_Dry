import React from "react";

import "./LoginFormInNavbar.scss";

const LoginFormInNavbar = ({
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
      onClick={() => onClick("DryLoginFormInNavbar")}
      className="dry-loginFormInNavbar"
    >
      DryLoginFormInNavbar
    </div>
  );
};

LoginFormInNavbar.defaultProps = {
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

export default LoginFormInNavbar;
