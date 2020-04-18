import React from "react";

import "./About.scss";

const About = ({ title, text, pic, description, selectedFile }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={pic} />
    </div>
  );
};

export default About;
