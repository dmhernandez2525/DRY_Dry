import React, { useState } from "react";
import classnames from "classnames";

import "./Input.scss";

const Input = ({
  label,
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
  type,
  placeholder,
  min,
  max
}) => {
  const [inputFocus, setInputFocus] = useState(false);
  const handleFocus = () => {
    setInputFocus(true);
  };

  return (
    <div className={`input ${className}`}>
      <div className="input__label-wrapper">
        <label
          className={classnames({
            input__label: true,
            "input__label--active": inputFocus
          })}
        >
          {label}
        </label>
      </div>
      <input
        className="input__html-input"
        id={id}
        name={name}
        type={type}
        onClick={onClick}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={handleFocus}
        disabled={disable}
        {...styles}
        {...passProps}
        placeholder={placeholder}
        min={min}
        max={max}
      />
    </div>
  );
};

Input.defaultProps = {
  label: "",
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
  type: "",
  placeholder: "",
  min: "",
  max: ""
};

export default Input;
