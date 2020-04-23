import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Switch = () => <TEST onClick={action("clicked")}>Hello Switch</TEST>;

export default Switch;
