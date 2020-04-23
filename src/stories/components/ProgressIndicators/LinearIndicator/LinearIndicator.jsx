import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const LinearIndicator = () => (
  <TEST onClick={action("clicked")}>Hello LinearIndicator</TEST>
);

export default LinearIndicator;
