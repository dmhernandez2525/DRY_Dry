import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Button = () => <TEST onClick={action("clicked")}>Hello Button</TEST>;

export default Button;
