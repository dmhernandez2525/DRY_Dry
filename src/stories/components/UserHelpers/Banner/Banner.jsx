import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Banner = () => <TEST onClick={action("clicked")}>Hello Banner</TEST>;

export default Banner;
