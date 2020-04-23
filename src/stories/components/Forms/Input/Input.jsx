import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Input = () => <TEST onClick={action("clicked")}>Hello Input</TEST>;

export default Input;
