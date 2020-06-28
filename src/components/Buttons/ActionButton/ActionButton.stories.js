import React from "react";
import { withReadme } from "storybook-readme";

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

import ActionButton from "./ActionButton";

import { storiesOf } from "@storybook/react";

import ButtonReadme from "../Button/DryDocsReadme.md";
import AsdfPropTable from "./AsdfPropTable.md";
// export default {
//   component: ActionButton,
//   title: "ActionButton",
//   decorators: [withKnobs],
//   // Our exports that end in "Data" are not stories.
//   excludeStories: /.*Data$/
// };

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <ActionButton
      id={text("id", "")}
      name={text("name", "")}
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

export const Disable = () => (
  <ActionButton
    id={text("id", "")}
    name={text("name", "")}
    userTip={text("userTip", "")}
    disable={boolean("disable", true)}
    className={text("className", "")}
    errorMes={text("errorMes", "")}
    styles={object("styles", {})}
    passProps={object("passProps", {})}
    {...actionsData}
  />
);

export const Error = () => (
  <ActionButton
    id={text("id", "")}
    name={text("name", "")}
    userTip={text("userTip", "")}
    disable={boolean("disable", false)}
    className={text("className", "")}
    errorMes={text("errorMes", "DemoError")}
    styles={object("styles", {})}
    passProps={object("passProps", {})}
    {...actionsData}
  />
);

const userTip =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo arcu sit amet malesuada tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus finibus eget ex id consectetur. Curabitur scelerisque, purus sit amet auctor rhoncus, lorem sem blandit ipsum, vitae convallis quam magna nec leo. Cras aliquet metus quis tortor pharetra hendrerit. Sed placerat interdum hendrerit. Mauris convallis lacus enim, a dignissim dolor congue at. Mauris eget consequat nisl. Donec lobortis ligula eu velit pharetra, sit amet bibendum sapien molestie. Donec vestibulum blandit massa eget commodo. Aliquam aliquet tristique tortor, ac facilisis sem rhoncus id. Sed bibendum diam nisl, in aliquam risus venenatis quis. Praesent ipsum metus, dictum nec aliquam id, venenatis et ante. Quisque sit amet suscipit elit. Pellentesque eget turpis a ex ullamcorper hendrerit id eget dolor.";

export const UserTip = () => (
  <ActionButton
    id={text("id", "")}
    name={text("name", "")}
    userTip={text("userTip", userTip)}
    disable={boolean("disable", false)}
    className={text("className", "")}
    errorMes={text("errorMes", "")}
    styles={object("styles", {})}
    passProps={object("passProps", {})}
    {...actionsData}
  />
);

storiesOf("Components/Buttons/ActionButton", module)
  .addParameters({
    zeplinLink:
      "https://app.zeplin.io/project/5ea6d579b0189824e6da8f37/screen/5eaf6155c0bf31b0c3600bc7",
    readme: {
      codeTheme: "atom-dark",
      sidebar: [ButtonReadme, AsdfPropTable],
      StoryPreview: ({ children }) => {
        return (
          <div>
            {children}
            {/* {AsdfPropTable} */}
          </div>
        );
      }
      // content: AsdfPropTable
    }
  })
  // .addDecorator(withReadme(ButtonReadme))
  // .add(
  //   "Default",
  //   withReadme(ButtonReadme, () => <Default />)
  // )
  .add("Default", () => <Default />)
  .add("Error", () => <Error />)
  .add("UserTip", () => <UserTip />)
  .add("Disable", () => <Disable />);
