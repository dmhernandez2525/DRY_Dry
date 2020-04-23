import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Team = () => <TEST onClick={action("clicked")}>Hello Team</TEST>;

export default Team;
