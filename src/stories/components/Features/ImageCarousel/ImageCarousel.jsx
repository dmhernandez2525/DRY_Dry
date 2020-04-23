import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";
import { ImageCarousel as DryImageCarousel } from "../../../../components";

const ImageCarousel = () => (
  <DryImageCarousel onClick={action("clicked")}>
    Hello ImageCarousel
  </DryImageCarousel>
);

export default ImageCarousel;
