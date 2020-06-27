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
import { storiesOf } from "@storybook/react";

import Button from "./Button";
import ButtonReadme from "./DryDocsReadme.md";

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
// Default.story = {
//   name: "default"
// };
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

// export default {
//   component: Button,
//   title: "Components/Badges/Button",
//   decorators: [withKnobs],
//   excludeStories: /.*Data$/
// };

storiesOf("Components/Buttons/Button", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea",
      sidebar: ButtonReadme
    }
  })
  .add("Default", () => <Default />)
  .add("Disable", () => <Disable />);
