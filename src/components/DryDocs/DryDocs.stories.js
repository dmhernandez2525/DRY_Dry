import React from "react";
// import { action } from "@storybook/addon-actions";
// import { storiesOf } from "@storybook/react";
import DryDocs from "./DryDocs";
import DryDocsReadme from "./DryDocsReadme.md";
import { withKnobs } from "@storybook/addon-knobs/react";

export default {
  component: DryDocs,
  title: "DryDocs",
  decorators: [withKnobs],
  readme: {
    content: DryDocsReadme,
    sidebar: DryDocsReadme
  },
  excludeStories: /.*Data$/
};

export const Default = () => {
  return <DryDocs />;
};
