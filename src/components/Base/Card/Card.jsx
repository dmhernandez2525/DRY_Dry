import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import * as Utils from "./Card.utils.js";

import "./Card.scss";

const Card = ({ id, children, active, className }) => {
  return (
    <div
      className={classnames({
        [className]: true,
        "dry-card": true,
        "dry-elevate-2": !active,
        "dry-elevate-9": active
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.object
};

Card.defaultProps = {
  id: "",
  active: false,
  className: "",
  children: null
};

export default Card;
