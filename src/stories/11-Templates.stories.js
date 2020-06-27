import React from "react";
import { storiesOf } from "@storybook/react";

import { Restaurant, NonProfit } from "./index";

// export default {
//   title: "Templates"
//   // component: Templates
// };

let restaurant = Restaurant.Default;
let nonprofit = NonProfit.Default;
export { restaurant, nonprofit };

storiesOf("Templates/Restaurant", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <restaurant />);

storiesOf("Templates/Nonprofit", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <nonprofit />);
