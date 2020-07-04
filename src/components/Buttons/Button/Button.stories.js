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

import Button from "./Button";
import ButtonPropTable from "./ButtonPropTable.md";
import README from "./README.md";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <Button
      id={text("id", "")}
      name={text("name", "Demo")}
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

storiesOf("components/Buttons/Button", module)
  .addParameters({
    zeplinLink:
      "https://app.zeplin.io/project/5ea6d579b0189824e6da8f37/screen/5eaf6155c0bf31b0c3600bc7",
    readme: {
      codeTheme: "atom-dark",
      sidebar: [README, ButtonPropTable],
      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />);
