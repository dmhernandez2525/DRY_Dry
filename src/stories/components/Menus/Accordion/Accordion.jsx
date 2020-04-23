import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Accordion = () => (
  <TEST onClick={action("clicked")}>Hello Accordion</TEST>
);

export default Accordion;
