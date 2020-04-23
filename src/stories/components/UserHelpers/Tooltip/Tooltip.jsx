import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Tooltip = () => <TEST onClick={action("clicked")}>Hello Tooltip</TEST>;

export default Tooltip;
