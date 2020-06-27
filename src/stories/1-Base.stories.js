import React from "react";
import { storiesOf } from "@storybook/react";

// storiesOf("Components/Buttons/ToggleButton", module)
//   .addParameters({
//     readme: {
//       codeTheme: "duotone-sea",
//     }
//   })
//   .add("Default", () => <Default />)

import { Card } from "./index";

// export default {
//   title: "Base"
//   // component: Base
// };
let Cardd = Card.Default;
// export { card };
storiesOf("Components/Base/Card", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <Cardd />);
