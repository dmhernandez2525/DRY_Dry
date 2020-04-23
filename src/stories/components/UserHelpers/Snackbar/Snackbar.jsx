import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Snackbar = () => <TEST onClick={action("clicked")}>Hello Snackbar</TEST>;

export default Snackbar;
