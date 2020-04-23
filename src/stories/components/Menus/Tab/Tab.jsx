import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Tab = () => <TEST onClick={action("clicked")}>Hello Tab</TEST>;

export default Tab;
