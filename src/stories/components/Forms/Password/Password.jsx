import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Password = () => <TEST onClick={action("clicked")}>Hello Password</TEST>;

export default Password;
