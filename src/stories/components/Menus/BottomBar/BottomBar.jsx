import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const BottomBar = () => (
  <TEST onClick={action("clicked")}>Hello BottomBar</TEST>
);

export default BottomBar;
