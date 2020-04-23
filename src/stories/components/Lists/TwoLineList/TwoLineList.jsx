import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const TwoLineList = () => (
  <TEST onClick={action("clicked")}>Hello TwoLineList</TEST>
);

export default TwoLineList;
