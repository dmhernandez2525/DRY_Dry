import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const DryButton = () => (
  <TEST onClick={action("clicked")}>Hello DryButton</TEST>
);

export default DryButton;
