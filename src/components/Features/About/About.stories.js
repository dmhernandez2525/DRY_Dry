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

import About from "./About";

export default {
  component: About,
  title: "About",
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <About
      id={text("id", "")}
      title={text("title", "Demo About")}
      text={text(
        "text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare enim risus, id fringilla tortor elementum tristique. Etiam nec augue et purus aliquet euismod id eget massa. Sed sollicitudin dictum massa. Ut nec lorem sed tortor cursus ornare vel vitae augue. Suspendisse varius nisl ac mi ornare, et luctus metus elementum. Donec non congue lectus, vel rutrum mi. Suspendisse potenti. Aenean accumsan vulputate dui, id pretium mi blandit eu. Sed nec libero at eros congue semper."
      )}
      pic={text(
        "pic",
        "https://comfort-order-dev.s3.us-east-2.amazonaws.com/20200525_172756.jpg"
      )}
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
  <About
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
  <About
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
  <About
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
