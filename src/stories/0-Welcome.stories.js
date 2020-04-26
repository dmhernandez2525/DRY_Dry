import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import DryDocs from "../components/DryDocs/DryDocs";

export default {
  title: "Welcome",
  component: DryDocs
};

export const Dry = () => <DryDocs showApp={linkTo("Button")} />;

Dry.story = {
  name: "to DRY"
};
