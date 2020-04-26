import "./component.css";
import { addParameters } from "@storybook/react";
import yourTheme from "./yourTheme";
import { themes } from "@storybook/theming";

addParameters({
  options: {
    theme: yourTheme
  }
});
