import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import * as Utils from "./Button.utils.js";

import "./Button.scss";

const Button = ({
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
  passProps
}) => {
  return (
    <div
      className={classnames({
        [className]: true,
        "dry-button": true
      })}
    >
      <button className="dry-button__button">{name}</button>
    </div>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
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

Button.defaultProps = {
  id: "",
  name: "Demo",
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

export default Button;
