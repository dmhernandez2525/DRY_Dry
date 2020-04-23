import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const ActionButton = () => (
  <TEST onClick={action("clicked")}>Hello ActionButton</TEST>
);

export default ActionButton;
