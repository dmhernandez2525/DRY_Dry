import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const DropdownMenu = () => (
  <TEST onClick={action("clicked")}>Hello DropdownMenu</TEST>
);

export default DropdownMenu;
