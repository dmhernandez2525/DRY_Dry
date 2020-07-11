import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import * as Utils from "./Switch.utils.js";

import "./Switch.scss";

const Switch = ({
  id,
  label,
  userTip,
  onClick,
  onBlur,
  active,
  onFocus,
  disable,
  className,
  styles,
  passProps
}) => {
  const [toggled, setToggled] = useState(active);
  const [focus, setFocus] = useState(false);

  useEffect(() => setToggled(active), [active]);

  return (
    <div
      // onFocus={onFocus}
      onClick={onClick}
      className={classnames({
        [className]: true,
        "dry-switch": true
      })}
    >
      <div>
        <span>{label}</span>
        <div
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => setFocus(false)}
          className="dry-switch__track-wrapper"
        >
          <div
            className={classnames({
              "dry-switch__focus": true,
              "dry-switch__focus--active": focus
            })}
          ></div>
          <div className="dry-switch__track">
            <div
              className={classnames({
                "dry-switch__ball": true,
                "dry-switch__ball--active": toggled
              })}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

Switch.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  userTip: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disable: PropTypes.bool,
  className: PropTypes.string,
  errorMes: PropTypes.string,
  styles: PropTypes.object,
  passProps: PropTypes.object
};

Switch.defaultProps = {
  id: "",
  label: "Demo",
  userTip: "",
  onClick: null,
  onChange: null,
  active: false,
  onBlur: null,
  disable: false,
  className: "",
  errorMes: "",
  styles: null,
  passProps: null
};

export default Switch;
