import React from "react";

import "./ComparisonTable.scss";

const ComparisonTable = ({
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
      onClick={() => onClick("DryComparisonTable")}
      className="dry-comparisonTable"
    >
      DryComparisonTable
    </div>
  );
};

ComparisonTable.defaultProps = {
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

export default ComparisonTable;
