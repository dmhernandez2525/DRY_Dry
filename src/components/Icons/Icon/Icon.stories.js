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

import Icon from "./Icon";
import DryIconSearch from "./IconSearch";
import "./Icon.scss";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <Icon
      id={text("id", "")}
      name={text("name", "")}
      width={text("width", "50")}
      height={text("height", "50")}
      viewBox={text("viewBox", "0 0 100 100")}
      icon={text("icon", "")}
      userTip={text("userTip", "")}
      disable={boolean("disable", false)}
      className={text("className", "")}
      errorMes={text("errorMes", "")}
      styles={object("styles", {})}
      passProps={object("passProps", {})}
      {...actionsData}
    />
  );
};

export const AllIcons = () => <DryIconSearch />;

storiesOf("Docs/Sticker Sheet", module).add("About", () => <Default />);

storiesOf("components/Icons/Icon", module)
  .addParameters({
    zeplinLink: "",
    readme: {
      codeTheme: "atom-dark",

      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />)
  .add("AllIcons", () => <AllIcons />);
