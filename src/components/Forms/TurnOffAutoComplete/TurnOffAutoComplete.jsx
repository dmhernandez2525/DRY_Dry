import React from "react";

import "./TurnOffAutoComplete.scss";

const TurnOffAutoComplete = ({
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
      onClick={() => onClick("DryTurnOffAutoComplete")}
      className="dry-turnOffAutoComplete"
    >
      DryTurnOffAutoComplete
    </div>
  );
};

TurnOffAutoComplete.defaultProps = {
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

export default TurnOffAutoComplete;
