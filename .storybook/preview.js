import "./component.css";
import { addParameters, addDecorator } from "@storybook/react";
import { addReadme } from "storybook-readme";
import yourTheme from "./yourTheme";
import prismatomdark from "./prism-atom-dark.css";
import { themes } from "@storybook/theming";

addParameters({
  options: {
    theme: yourTheme
  }
});
addDecorator(addReadme);
