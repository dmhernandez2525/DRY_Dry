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
    <div onClick={() => onClick("DryAbout")} className="dry-about">
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={pic} />
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
