import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const ConfirmationDialog = () => (
  <TEST onClick={action("clicked")}>Hello ConfirmationDialog</TEST>
);

export default ConfirmationDialog;
