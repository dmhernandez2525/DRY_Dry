import "./component.css";
import { addParameters, addDecorator } from "@storybook/react";
import { addReadme } from "storybook-readme";
import yourTheme from "./yourTheme";
import { themes } from "@storybook/theming";

addParameters({
  options: {
    theme: yourTheme
  }
});
addDecorator(addReadme);
