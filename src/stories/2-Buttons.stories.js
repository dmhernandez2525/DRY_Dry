import React from "react";
import {
  ActionButton,
  DryButton,
  ToggleButton,
  OutlinedButton,
  ContainedButton,
  TextButton
} from "./index";

import { storiesOf } from "@storybook/react";

// storiesOf("Componentsdefrge/Buttons/ContainedButton", module)
//   .addParameters({
//     readme: {
//       codeTheme: "duotone-sea"
//       // sidebar: ButtonReadme
//     }
//   })
//   .add("Default", () => <ContainedButton.Default />)
//   .add("Error", () => <ContainedButton.Error />)
//   .add("UserTip", () => <ContainedButton.UserTip />)
//   .add("Disable", () => <ContainedButton.Disable />);

// export default {
//   title: "Buttons"
//   // component: Button
// };
const Action = ActionButton.Default;
// const Button = DryButton.Default;
const Button = DryButton.Default;
const Toggle = ToggleButton.Default;
const Outlined = OutlinedButton.Default;
const Contained = ContainedButton.Default;
const Text = TextButton.Default;

// export { Button };
export { Action, Button, Toggle, Outlined, Contained, Text };
