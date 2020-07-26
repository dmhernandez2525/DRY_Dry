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

import Hours from "./Hours";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <Hours
      id={text("id", "")}
      name={text("name", "")}
      userTip={text("userTip", "")}
      disable={boolean("disable", false)}
      className={text("className", "")}
      errorMes={text("errorMes", "")}
      styles={object("styles", {})}
      passProps={object("passProps", {})}
      data={object("data", {
        Monday: { from: "10am", to: "10pm" },
        Tuesday: { from: "10am", to: "10pm" },
        Wednesday: { from: "10am", to: "10pm" },
        Thursday: { from: "10am", to: "10pm" },
        Friday: { from: "10am", to: "10pm" },
        Saturday: { from: "10am", to: "10pm" },
        Sunday: { from: "10am", to: "10pm" }
      })}
      {...actionsData}
    />
  );
};

storiesOf("Docs/Sticker Sheet", module).add("Change", () => <Default />);

storiesOf("Features/Hours", module)
  .addParameters({
    zeplinLink: "",
    readme: {
      codeTheme: "atom-dark",
      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />);
