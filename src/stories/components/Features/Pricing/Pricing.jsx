import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Pricing = () => <TEST onClick={action("clicked")}>Hello Pricing</TEST>;

export default Pricing;
