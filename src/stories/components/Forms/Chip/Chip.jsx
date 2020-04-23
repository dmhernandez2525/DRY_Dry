import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Chip = () => <TEST onClick={action("clicked")}>Hello Chip</TEST>;

export default Chip;
