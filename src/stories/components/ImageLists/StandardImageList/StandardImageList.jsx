import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const StandardImageList = () => (
  <TEST onClick={action("clicked")}>Hello StandardImageList</TEST>
);

export default StandardImageList;
