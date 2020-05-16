import React from "react";

import "./Nav.scss";

const Nav = ({
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
    <div onClick={() => onClick("DryNav")} className="dry-nav">
      <div id="navbar" className="navbar" role="navigation">
        <ul id="top-menu" className="navbar-nav navbar-right">
          <li>
            <a href="#teleport-option1">Option 1</a>
          </li>
          <li>
            <a href="#teleport-option2">Option 2</a>
          </li>
          <li>
            <a href="#teleport-option3">Option 3</a>
          </li>
          <li>
            <a href="#teleport-option4">Option 4</a>
          </li>
        </ul>
      </div>
      {/*  */}
    </div>
  );
};

Nav.defaultProps = {
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

export default Nav;
