import React from "react";

import "./ZebraStripedTable.scss";

const ZebraStripedTable = ({
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
      onClick={() => onClick("DryZebraStripedTable")}
      className="dry-zebraStripedTable"
    >
      DryZebraStripedTable
    </div>
  );
};

ZebraStripedTable.defaultProps = {
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

export default ZebraStripedTable;
