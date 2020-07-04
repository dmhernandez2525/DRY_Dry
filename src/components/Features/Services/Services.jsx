import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import * as Utils from "./Services.utils.js";
import Card from "../../Base/Card";
import Icon from "../../Icons/Icon/Icon";
import Icons from "../../Icons/Icon/Icons";

import "./Services.scss";

const Services = ({ id, data, className }) => {
  const displayServiceCards = data.map(serviceObj => {
    return (
      <Card className="dry-services__service-card">
        <img
          className="dry-services__card-image"
          src={serviceObj.image}
          alt=""
        />
        <h2>{serviceObj.title}</h2>
        <p>{serviceObj.about}</p>
        <a className="dry-services__card-link " href={serviceObj.link}>
          {serviceObj.linkText}
          <Icon icon="keyboard_arrow_right-dry" width="30px" height="30px" />
        </a>
      </Card>
    );
  });
  return (
    <div
      className={classnames({
        [className]: true,
        "dry-services": true
      })}
    >
      <Icons />
      <div className="dry-services__service-card-wrapper">
        {displayServiceCards}
      </div>
    </div>
  );
};

Services.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.object
};

Services.defaultProps = {
  id: "",
  className: "",
  data: null
};

export default Services;
