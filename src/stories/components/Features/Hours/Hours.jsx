import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";
import { Hours as DryHours } from "../../../../components";

const Hours = () => (
  <DryHours onClick={action("clicked")}>Hello Hours</DryHours>
);

export default Hours;
