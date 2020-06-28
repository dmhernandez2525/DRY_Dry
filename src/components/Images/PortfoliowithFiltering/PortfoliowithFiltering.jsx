import React from "react";

import "./PortfoliowithFiltering.scss";

const PortfoliowithFiltering = ({
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
      onClick={() => onClick("DryPortfoliowithFiltering")}
      className="dry-portfoliowithFiltering"
    >
      DryPortfoliowithFiltering
    </div>
  );
};

PortfoliowithFiltering.defaultProps = {
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

export default PortfoliowithFiltering;
