import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const TopBar = () => <TEST onClick={action("clicked")}>Hello TopBar</TEST>;

export default TopBar;
