import React from "react";

import "./Tumble.scss";

const Tumble = ({ children }) => {
  return (
    <div className="container dry-tumble">
      <div className="tumbleweed">{children}</div>
    </div>
  );
};

Tumble.defaultProps = {
  children: null
};

export default Tumble;
