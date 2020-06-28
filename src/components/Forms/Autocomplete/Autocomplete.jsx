import React from "react";

import "./Autocomplete.scss";

const Autocomplete = ({
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
      onClick={() => onClick("DryAutocomplete")}
      className="dry-autocomplete"
    >
      DryAutocomplete
    </div>
  );
};

Autocomplete.defaultProps = {
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

export default Autocomplete;
