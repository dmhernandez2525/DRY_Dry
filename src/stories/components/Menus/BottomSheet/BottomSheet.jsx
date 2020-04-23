import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const BottomSheet = () => (
  <TEST onClick={action("clicked")}>Hello BottomSheet</TEST>
);

export default BottomSheet;
