import React, { useState } from "react";
import classnames from "classnames";

import "./AccordionSingle.scss";

const AccordionSingle = ({ text, children, className, styles }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="panel">
      <div className="panel__header-wrapper">
        <span>{text}</span>
        <div onClick={() => setActive(previousValue => !previousValue)}>
          <span
            className={classnames({
              "panel__header-icon": true,
              panel__part: true,
              "panel__part--active": !active
            })}
          >
            +
          </span>
          <span
            className={classnames({
              "panel__header-icon": true,
              panel__part: true,
              "panel__part--active": active
            })}
          >
            -
          </span>
        </div>
      </div>

      <div
        className={classnames({
          "panel__children-wrapper": true,
          panel__part: true,
          "panel__part--active": active
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionSingle;
