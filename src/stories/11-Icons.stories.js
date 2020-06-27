import React from "react";
import { storiesOf } from "@storybook/react";

import { Icon } from "./index";

// export default {
//   title: "Icons"
//   // component: Icons
// };
// const icon = () => <Icon icon="check-box" />;
// export { icon };

let defaultIcon = Icon.Default;
let AllIcons = Icon.AllIcons;
export { defaultIcon, AllIcons };

storiesOf("Components/Icons/Icon", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <defaultIcon />);
storiesOf("Components/Icons/AllIcons", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <AllIcons />);
