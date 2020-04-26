import React from "react";
import {
  AlertDialog,
  ModalBox,
  ConfirmationDialog,
  SimpleDialog
} from "../stories";
export default {
  title: "Modals"
  // component: Modals
};

const DryAlertDialog = AlertDialog.Default;
const DryModalBox = ModalBox.Default;
const DryConfirmationDialog = ConfirmationDialog.Default;
const DrySimpleDialog = SimpleDialog.Default;

export { DryAlertDialog, DryModalBox, DryConfirmationDialog, DrySimpleDialog };
