import React from "react";
import * as Utils from "./Liftoff.utils.js";

import "./Liftoff.scss";

const Liftoff = ({ children }) => {
  return (
    <div className="dry-liftoff__container dry-liftoff">
      <div className="liftoff">{children}</div>
    </div>
  );
};

Liftoff.defaultProps = {
  children: null
};

export default Liftoff;
