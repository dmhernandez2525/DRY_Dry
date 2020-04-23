import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const NavigationRail = () => (
  <TEST onClick={action("clicked")}>Hello NavigationRail</TEST>
);

export default NavigationRail;
