import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const ToggleButton = () => (
  <TEST onClick={action("clicked")}>Hello ToggleButton</TEST>
);

export default ToggleButton;
