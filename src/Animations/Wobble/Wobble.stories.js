import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  knob,
  text,
  boolean,
  number,
  color,
  object,
  array,
  date,
  select,
  files,
  button
} from "@storybook/addon-knobs/react";

import Wobble from "./Wobble";
import WobblePropTable from "./WobblePropTable.md";
import README from "./README.md";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return <Wobble children={object("children", <p>HI</p>)} {...actionsData} />;
};

storiesOf("Animations/Wobble", module)
  .addParameters({
    zeplinLink: "",
    readme: {
      codeTheme: "atom-dark",
      sidebar: [README, WobblePropTable],
      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />);
