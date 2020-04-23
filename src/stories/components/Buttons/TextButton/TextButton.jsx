import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const TextButton = () => (
  <TEST onClick={action("clicked")}>Hello TextButton</TEST>
);

export default TextButton;
