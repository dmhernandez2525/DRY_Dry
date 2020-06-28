import React from "react";
import { storiesOf } from "@storybook/react";
import { CircularIndicator, LinearIndicator } from "../stories";

// export default {
//   title: "ProgressIndicators"
//   // component: ProgressIndicators
// };

const Circular = CircularIndicator.Default;
const Linear = LinearIndicator.Default;

export { Circular, Linear };

storiesOf("Components/ProgressIndicators/Circular", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <Circular />);
storiesOf("Components/ProgressIndicators/Linear", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <Linear />);
