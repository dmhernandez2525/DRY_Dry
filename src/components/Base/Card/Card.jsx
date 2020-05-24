import React from "react";
import classnames from "classnames";

import "./Card.scss";

const Card = ({
  id,
  onClick,
  disable,
  className,
  children
}) => {
  return (
    <div id={id} onClick={onClick} className={classnames({
      card: true,
      [className]: true,
      card__disabled: disable
    })}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  id: "",
  onClick: null,
  disable: false,
  className: "",
  children: null
};

export default Card;
