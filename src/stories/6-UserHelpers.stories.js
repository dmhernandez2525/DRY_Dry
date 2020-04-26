import React from "react";
import { Banner, Snackbar, Tooltip } from "../stories";
export default {
  title: "UserHelpers"
  // component: UserHelpers
};

const DryBanner = Banner.Default;
const DrySnackbar = Snackbar.Default;
const DryTooltip = Tooltip.Default;

export { DryBanner, DrySnackbar, DryTooltip };
