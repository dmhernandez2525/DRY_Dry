import React from "react";

import "./SearchButton.scss";

const SearchButton = ({
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
      onClick={() => onClick("DrySearchButton")}
      className="dry-searchButton"
    >
      DrySearchButton
    </div>
  );
};

SearchButton.defaultProps = {
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

export default SearchButton;
