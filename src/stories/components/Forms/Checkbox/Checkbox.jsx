import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Checkbox = () => <TEST onClick={action("clicked")}>Hello Checkbox</TEST>;

export default Checkbox;
