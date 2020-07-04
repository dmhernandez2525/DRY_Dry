import React from "react";

import DryButton from "../../Buttons/DryButton";

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
        <img className="dry-about__image" src={pic} />
        <div className="dry-about__content-wrapper">
          <h2 className="dry-about__title">{title}</h2>
          <p>{text}</p>
          <DryButton name="Learn more" />
        </div>
      </div>
    </div>
  );
};

About.exampleData = JSON.stringify({
  title: "asdf",
  text: "asdfasdf",
  pic:
    "https://comfort-order-dev.s3.us-east-2.amazonaws.com/20200525_172756.jpg"
});
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
