import "./component.css";
import { addParameters, addDecorator } from "@storybook/react";
import { addReadme } from "storybook-readme";
import yourTheme from "./yourTheme";
import { withA11y } from "@storybook/addon-a11y";
import { themes } from "@storybook/theming";
import {
  INITIAL_VIEWPORTS
  // or MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

const customViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px"
    }
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px"
    }
  }
};

addDecorator(withInfo);
addDecorator(addReadme);
addParameters({
  backgrounds: [
    { name: "none", value: "#fff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" }
  ],
  options: {
    theme: yourTheme
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports
    },
    defaultViewport: "responsive"
    // defaultViewport: "iphone6"
  }
});
addDecorator(addReadme);
addDecorator(withA11y);
