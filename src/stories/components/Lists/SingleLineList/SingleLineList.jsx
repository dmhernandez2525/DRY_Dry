import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const SingleLineList = () => (
  <TEST onClick={action("clicked")}>Hello SingleLineList</TEST>
);

export default SingleLineList;
