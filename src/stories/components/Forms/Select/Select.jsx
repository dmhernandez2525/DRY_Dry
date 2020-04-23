import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Select = () => <TEST onClick={action("clicked")}>Hello Select</TEST>;

export default Select;
