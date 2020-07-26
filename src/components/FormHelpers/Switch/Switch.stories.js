import React, { useState } from "react";
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

import Switch from "./Switch";
import SwitchPropTable from "./SwitchPropTable.md";
import README from "./README.md";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <Switch
      id={text("id", "")}
      name={text("name", "")}
      active={toggled}
      userTip={text("userTip", "")}
      disable={boolean("disable", false)}
      className={text("className", "")}
      errorMes={text("errorMes", "")}
      styles={object("styles", {})}
      passProps={object("passProps", {})}
      onClick={() => setToggled(prevValue => !prevValue)}
    />
  );
};

export const Active = () => {
  return (
    <Switch
      id={text("id", "")}
      name={text("name", "")}
      userTip={text("userTip", "")}
      active={boolean("active", true)}
      disable={boolean("disable", false)}
      className={text("className", "")}
      errorMes={text("errorMes", "Someting")}
      styles={object("styles", {})}
      passProps={object("passProps", {})}
      {...actionsData}
    />
  );
};

storiesOf("components/FormHelpers/Switch", module)
  .addParameters({
    zeplinLink:
      "https://app.zeplin.io/project/5ea6d579b0189824e6da8f37/screen/5eaf615494b35819006ce58e",
    readme: {
      codeTheme: "atom-dark",
      sidebar: [README, SwitchPropTable],
      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />);
// .add("Active", () => <Active />);
