import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";
import { Pricing as DryPricing } from "../../../../components";

const Pricing = () => (
  <DryPricing onClick={action("clicked")}>Hello Pricing</DryPricing>
);

export default Pricing;
