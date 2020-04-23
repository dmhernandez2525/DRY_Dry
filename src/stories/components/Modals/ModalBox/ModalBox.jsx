import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";

const ModalBox = () => <TEST onClick={action("clicked")}>Hello ModalBox</TEST>;

export default ModalBox;
