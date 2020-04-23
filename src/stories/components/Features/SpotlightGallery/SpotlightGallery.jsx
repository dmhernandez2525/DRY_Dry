import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const SpotlightGallery = () => (
  <TEST onClick={action("clicked")}>Hello SpotlightGallery</TEST>
);

export default SpotlightGallery;
