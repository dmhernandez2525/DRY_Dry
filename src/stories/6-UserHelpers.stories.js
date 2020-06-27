import React from "react";
import { storiesOf } from "@storybook/react";

import { Banner, Snackbar, Tooltip } from "../stories";
// export default {
//   title: "UserHelpers"
//   // component: UserHelpers
// };

const DryBanner = Banner.Default;
const DrySnackbar = Snackbar.Default;
const DryTooltip = Tooltip.Default;

// export { DryBanner, DrySnackbar, DryTooltip };

storiesOf("Components/UserHelpers/DryBanner", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DryBanner />);
storiesOf("Components/UserHelpers/DrySnackbar", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DrySnackbar />);
storiesOf("Components/UserHelpers/DryTooltip", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DryTooltip />);
