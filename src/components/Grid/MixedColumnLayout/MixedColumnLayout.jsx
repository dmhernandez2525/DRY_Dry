import React from "react";

import "./MixedColumnLayout.scss";

const MixedColumnLayout = ({
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
      onClick={() => onClick("DryMixedColumnLayout")}
      className="dry-mixedColumnLayout"
    >
      DryMixedColumnLayout
    </div>
  );
};

MixedColumnLayout.defaultProps = {
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

export default MixedColumnLayout;
