import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Header1 = () => <TEST onClick={action("clicked")}>Hello Header1</TEST>;

export default Header1;
