import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Radio = () => <TEST onClick={action("clicked")}>Hello Radio</TEST>;

export default Radio;
