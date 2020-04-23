import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const About = () => <TEST onClick={action("clicked")}>Hello About</TEST>;

export default About;
