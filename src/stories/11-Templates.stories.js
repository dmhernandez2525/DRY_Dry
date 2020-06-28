import React from "react";
import { storiesOf } from "@storybook/react";

import { Restaurant, NonProfit } from "./index";

// export default {
//   title: "Templates"
//   // component: Templates
// };

let RRestaurant = Restaurant.Default;
let NNonprofit = NonProfit.Default;
// export { restaurant, nonprofit };

storiesOf("Templates/Restaurant", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <RRestaurant />);

storiesOf("Templates/Nonprofit", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <NNonprofit />);
