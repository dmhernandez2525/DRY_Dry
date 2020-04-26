import React, { useState } from "react";
import classnames from "classnames";

import "./Select.scss";

const Select = ({
  label,
  id,
  name,
  defaultValue,
  maxWidth,
  userTip,
  onClick,
  onChange,
  onBlur,
  onFocus,
  disable,
  className,
  errorMes,
  inputStyles,
  passProps,
  placeholder,
  children,
  info
}) => {
  const [activeOption, setActiveOption] = useState(defaultValue);
  const [showChildren, setShowChildren] = useState(false);
  const [focus, setFocus] = useState(false);
  const [labelfocus, setLabelFocus] = useState(false);

  const styles = {};
  if (maxWidth !== "") {
    styles = { ...styles, maxWidth };
  }

  const handleFocus = () => {
    setFocus(true);
    setShowChildren(previousValue => !previousValue);
    setLabelFocus(true);
  };

  const handleBlur = () => {
    setShowChildren(false);
    setFocus(false);
    if (activeOption === "") {
      setLabelFocus(false);
    }
  };

  if (info) {
    console.log("Select Props", {
      label: "",
      id: "",
      name: "",
      maxWidth: "",
      defaultValue: "",
      userTip: "",
      onClick: null,
      onChange: null,
      onBlur: null,
      onFocus: null,
      disable: false,
      className: "",
      errorMes: "",
      inputStyles: null,
      passProps: null,
      placeholder: "",
      children: { default: "default" },
      info: false
    });
  }

  const allChildren = Object.keys(children);
  allChildren.unshift(defaultValue);
  const displaySelectChildren = allChildren.map(option => {
    return (
      <div
        className={classnames({
          select__children: true,
          "select__children--current": activeOption === option
        })}
        onClick={() => setActiveOption(option)}
      >
        {option}
      </div>
    );
  });

  return (
    <div
      style={styles}
      onClick={() => onClick("DrySelect")}
      className="dry-select"
    >
      <div onMouseLeave={handleBlur} className="select">
        <div
          onChange={onChange}
          className="select__input-wrapper"
          name={name}
          id={id}
        >
          <label
            className={classnames({
              select__label: true,
              "select__label--active": labelfocus
            })}
          >
            {label}
          </label>
          <div
            onClick={handleFocus}
            className={classnames({
              select__input: true,
              "select__input--focus": focus
            })}
          >
            <div className="select__activeOption">{activeOption}</div>
            <div
              className={classnames({
                "select__dropdown-icon": true,
                "select__dropdown-icon--active": showChildren
              })}
            >
              +
            </div>
          </div>
          <div
            className={classnames({
              "select__children-wrapper": true,
              "select__children-wrapper--active": showChildren
            })}
          >
            {displaySelectChildren}
          </div>
        </div>
      </div>
    </div>
  );
};

Select.defaultProps = {
  label: "",
  id: "",
  name: "",
  maxWidth: "",
  defaultValue: "",
  userTip: "",
  onClick: null,
  onChange: null,
  onBlur: null,
  onFocus: null,
  disable: false,
  className: "",
  errorMes: "",
  inputStyles: null,
  passProps: null,
  placeholder: "",
  children: { default: "default" },
  info: false
};
export default Select;
