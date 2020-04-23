import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const SelectionControl = () => (
  <TEST onClick={action("clicked")}>Hello SelectionControl</TEST>
);

export default SelectionControl;
