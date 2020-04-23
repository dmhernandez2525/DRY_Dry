import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const ContainedButton = () => (
  <TEST onClick={action("clicked")}>Hello ContainedButton</TEST>
);

export default ContainedButton;
