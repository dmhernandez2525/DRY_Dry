import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const QuiltedImageList = () => (
  <TEST onClick={action("clicked")}>Hello QuiltedImageList</TEST>
);

export default QuiltedImageList;
