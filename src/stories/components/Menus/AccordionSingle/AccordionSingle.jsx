import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const AccordionSingle = () => (
  <TEST onClick={action("clicked")}>Hello AccordionSingle</TEST>
);

export default AccordionSingle;
