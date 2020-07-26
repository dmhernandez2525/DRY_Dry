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

import Select from "./Select";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <Select
      label={text("label", "Demo")}
      id={text("id", "")}
      name={text("name", "")}
      maxWidth={text("maxWidth", "")}
      userTip={text("userTip", "")}
      disable={boolean("disable", false)}
      className={text("className", "")}
      errorMes={text("errorMes", "")}
      inputStyles={object("inputStyles", {})}
      passProps={object("passProps", {})}
      children={object("children", { default: "default" })}
      {...actionsData}
    />
  );
};

storiesOf("Components/FormHelper/Select", module)
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
