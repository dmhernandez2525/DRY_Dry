import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";
import { SpotlightGallery as DrySpotlightGallery } from "../../../../components";

const SpotlightGallery = () => (
  <DrySpotlightGallery onClick={action("clicked")}>
    Hello SpotlightGallery
  </DrySpotlightGallery>
);

export default SpotlightGallery;
