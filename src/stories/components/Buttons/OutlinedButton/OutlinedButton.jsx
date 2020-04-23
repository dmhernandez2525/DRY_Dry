import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const OutlinedButton = () => (
  <TEST onClick={action("clicked")}>Hello OutlinedButton</TEST>
);

export default OutlinedButton;
