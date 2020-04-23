import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const ImageCarousel = () => (
  <TEST onClick={action("clicked")}>Hello ImageCarousel</TEST>
);

export default ImageCarousel;
