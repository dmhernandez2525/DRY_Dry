import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const AlertDialog = () => (
  <TEST onClick={action("clicked")}>Hello AlertDialog</TEST>
);

export default AlertDialog;
