import React from "react";
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

import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <Button
      id={text("id", "")}
      name={text("name", "")}
      disable={boolean("disable", false)}
      className={text("className", "")}
      passProps={object("passProps", {})}
      {...actionsData}
    />
  );
};

export const Disable = () => (
  <Button
    id={text("id", "")}
    name={text("name", "")}
    disable={boolean("disable", true)}
    className={text("className", "")}
    passProps={object("passProps", {})}
    {...actionsData}
  />
);
