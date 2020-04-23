import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Slider = () => <TEST onClick={action("clicked")}>Hello Slider</TEST>;

export default Slider;
