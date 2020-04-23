import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const ThreeLineList = () => (
  <TEST onClick={action("clicked")}>Hello ThreeLineList</TEST>
);

export default ThreeLineList;
