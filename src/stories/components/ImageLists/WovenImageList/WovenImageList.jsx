import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const WovenImageList = () => (
  <TEST onClick={action("clicked")}>Hello WovenImageList</TEST>
);

export default WovenImageList;
