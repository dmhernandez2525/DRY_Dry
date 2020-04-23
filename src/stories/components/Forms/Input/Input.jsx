import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";
import { Input as DryInput } from "../../../../components";
const Input = () => (
  <div style={{ width: "300px" }}>
    <DryInput label="Demo Label" onClick={action("clicked")}>
      Hello Input
    </DryInput>
  </div>
);

export default Input;
