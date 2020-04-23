import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const SideSheet = () => (
  <TEST onClick={action("clicked")}>Hello SideSheet</TEST>
);

export default SideSheet;
