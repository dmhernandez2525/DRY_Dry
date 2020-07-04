import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  // colorPrimary: "hotpink",
  colorSecondary: "black",

  // UI
  // colors: ['#1EA7FD']
  // appBg: "#ddd",
  appBg: "#1ea7fd29",
  // appBg: "rgba(57, 12, 110, 1)",
  // appContentBg: "silver",
  // appBorderColor: "grey",
  // appBorderRadius: 4,

  // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: "monospace",

  // Text colors
  textColor: "black",
  // textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  // barSelectedColor: "black",
  // barBg: "hotpink",

  // Form colors
  // inputBg: "white",
  // inputBorder: "silver",
  // inputTextColor: "black",
  // inputBorderRadius: 4,

  brandTitle: "DRY Docs",
  brandUrl: "http://localhost:9009",
  brandImage: "/ComfortOrderLogo.png"
});
