import React from "react";

import "./About.scss";

const About = ({
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
  title,
  text,
  pic,
  description,
  selectedFile
}) => {
  return (
    <div className="dry-about">
      <div className="dry-about__title-wrapper">
        <h2 className="dry-about__title">{title}</h2>
        <img className="dry-about__image" src={pic} />
      </div>
      <p>{text}</p>
    </div>
  );
};

About.defaultProps = {
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

export default About;
