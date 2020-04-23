import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const CircularIndicator = () => (
  <TEST onClick={action("clicked")}>Hello CircularIndicator</TEST>
);

export default CircularIndicator;
