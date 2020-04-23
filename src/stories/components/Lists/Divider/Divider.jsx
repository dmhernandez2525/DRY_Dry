import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Divider = () => <TEST onClick={action("clicked")}>Hello Divider</TEST>;

export default Divider;
