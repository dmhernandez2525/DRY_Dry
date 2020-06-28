import React from "react";

import "./Wobble.scss";

const Wobble = ({ children }) => {
  return (
    <div id="animated-example" className="dry-wobble">
      {children}
    </div>
  );
};

Wobble.defaultProps = {
  children: null
};

export default Wobble;
