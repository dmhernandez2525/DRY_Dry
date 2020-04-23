import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";
import { Header1 as DryHeader1 } from "../../../../components";

const Header1 = () => (
  <DryHeader1 onClick={action("clicked")}>Hello Header1</DryHeader1>
);

export default Header1;
