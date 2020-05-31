import React, { useState } from "react";
import classnames from "classnames";

import "./AccordionSingle.scss";

const AccordionSingle = ({
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
  text,
  children
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => onClick("DryAccordionSingle")}
      className="dry-accordionSingle"
    >
      <div className="panel">
        <div className="panel__header-wrapper">
          <span className="panel__label">{text}</span>
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
    </div>
  );
};

AccordionSingle.defaultProps = {
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
  passProps: null
};

export default AccordionSingle;
