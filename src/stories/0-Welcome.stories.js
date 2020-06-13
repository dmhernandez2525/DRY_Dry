import React from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
// import DryDocs from "../components/DryDocs/DryDocs.stories";
import DryDocs from "../components/DryDocs/DryDocs";
import DryDocsReadme from "../components/DryDocs/DryDocsReadme.md";

storiesOf("Docs", module)
  .addParameters({
    readme: {
      content: DryDocsReadme,
      sidebar: DryDocsReadme
    }
  })
  .add("DryDocs", () => <DryDocs showApp={linkTo("Button")} />);

// export default {
//   title: "Welcome",
//   component: DryDocs
// };

// export const Dry = DryDocs.Default;
// export const Dry = () => <DryDocs showApp={linkTo("Button")} />;

// Dry.story = {
//   name: "to DRY"
// };
