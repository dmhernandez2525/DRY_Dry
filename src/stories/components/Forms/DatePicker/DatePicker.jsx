import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const DatePicker = () => (
  <TEST onClick={action("clicked")}>Hello DatePicker</TEST>
);

export default DatePicker;
