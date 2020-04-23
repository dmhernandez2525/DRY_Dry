import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Label = () => <TEST onClick={action("clicked")}>Hello Label</TEST>;

export default Label;
