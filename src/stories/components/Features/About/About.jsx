import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";
import { About as DryAbout } from "../../../../components";

const About = () => (
  <DryAbout onClick={action("clicked")}>Hello About</DryAbout>
);

export default About;
