import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";
import { Select as DrySelect } from "../../../../components";

const Select = () => (
  <div style={{ width: "300px" }}>
    <DrySelect label="Demo Label" onClick={action("clicked")}>
      Hello Select
    </DrySelect>
  </div>
);

export default Select;
