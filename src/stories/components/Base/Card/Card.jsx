import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const Card = () => <TEST onClick={action("clicked")}>Hello Card</TEST>;

export default Card;
