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

import Tumble from "./Tumble";
import TumblePropTable from "./TumblePropTable.md";
import README from "./README.md";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return <Tumble children={object("children", <p>Hi</p>)} {...actionsData} />;
};

storiesOf("Animations/Tumble", module)
  .addParameters({
    zeplinLink: "",
    readme: {
      codeTheme: "atom-dark",
      sidebar: [README, TumblePropTable],
      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />);
