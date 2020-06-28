import React from "react";

import "./TriggerButtonOnEnter.scss";

const TriggerButtonOnEnter = ({
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
      onClick={() => onClick("DryTriggerButtonOnEnter")}
      className="dry-triggerButtonOnEnter"
    >
      DryTriggerButtonOnEnter
    </div>
  );
};

TriggerButtonOnEnter.defaultProps = {
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

export default TriggerButtonOnEnter;
