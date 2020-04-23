import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const BottomNavigation = () => (
  <TEST onClick={action("clicked")}>Hello BottomNavigation</TEST>
);

export default BottomNavigation;
