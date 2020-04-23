import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const NavigationDrawer = () => (
  <TEST onClick={action("clicked")}>Hello NavigationDrawer</TEST>
);

export default NavigationDrawer;
