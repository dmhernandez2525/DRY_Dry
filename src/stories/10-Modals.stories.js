import React from "react";
import { storiesOf } from "@storybook/react";

import {
  AlertDialog,
  ModalBox,
  ConfirmationDialog,
  SimpleDialog
} from "../stories";
// export default {
//   title: "Modals"
//   // component: Modals
// };

const DryAlertDialog = AlertDialog.Default;
const DryModalBox = ModalBox.Default;
const DryConfirmationDialog = ConfirmationDialog.Default;
const DrySimpleDialog = SimpleDialog.Default;

export { DryAlertDialog, DryModalBox, DryConfirmationDialog, DrySimpleDialog };

storiesOf("Components/Modals/AlertDialog", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryAlertDialog />);

storiesOf("Components/Modals/ModalBox", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryModalBox />);

storiesOf("Components/Modals/ConfirmationDialog", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryConfirmationDialog />);

storiesOf("Components/Modals/SimpleDialog", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DrySimpleDialog />);
