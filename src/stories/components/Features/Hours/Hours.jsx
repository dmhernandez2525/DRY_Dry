import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Hours = () => <TEST onClick={action("clicked")}>Hello Hours</TEST>;

export default Hours;
