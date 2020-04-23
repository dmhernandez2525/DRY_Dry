import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const SimpleDialog = () => (
  <TEST onClick={action("clicked")}>Hello SimpleDialog</TEST>
);

export default SimpleDialog;
