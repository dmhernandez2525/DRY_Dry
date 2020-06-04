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

import Icons from "../../Icon/Icons";

import Pricing from "./Pricing";

export default {
  component: Pricing,
  title: "Pricing",
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
    <div>
      <Icons />
      <Pricing
        id={text("id", "")}
        name={text("name", "")}
        userTip={text("userTip", "")}
        disable={boolean("disable", false)}
        className={text("className", "")}
        errorMes={text("errorMes", "")}
        styles={object("styles", {})}
        passProps={object("passProps", {})}
        rows={object("Rows", {
          row1: {
            name: "Free",
            price: 0,
            details: [
              "Curabitur eu eros et risus rutrum elementum.",
              "Phasellus a quam lobortis magna viverra tempus.",
              "Sed dictum nibh porttitor aliquet pulvinar.",
              "Pellentesque vestibulum erat eu ex laoreet volutpat."
            ]
          },
          row2: {
            name: "Plus",
            price: 9,
            details: [
              "Curabitur eu eros et risus rutrum elementum.",
              "Phasellus a quam lobortis magna viverra tempus.",
              "Sed dictum nibh porttitor aliquet pulvinar.",
              "Pellentesque vestibulum erat eu ex laoreet volutpat.",
              "Nam tempor ex auctor nunc gravida, vel facilisis eros sagittis.",
              "Nullam quis eros ac eros cursus tempor a quis lorem."
            ]
          },
          row3: {
            name: "Pro",
            price: 20,
            details: [
              "Curabitur eu eros et risus rutrum elementum.",
              "Phasellus a quam lobortis magna viverra tempus.",
              "Sed dictum nibh porttitor aliquet pulvinar.",
              "Pellentesque vestibulum erat eu ex laoreet volutpat.",
              "Nam tempor ex auctor nunc gravida, vel facilisis eros sagittis.",
              "Nullam quis eros ac eros cursus tempor a quis lorem.",
              "Proin vel nisi sed mauris tristique tincidunt vulputate sit amet nulla.",
              "Phasellus vulputate nisi in libero euismod, lacinia mattis ligula cursus.",
              "Donec porta enim vitae mollis bibendum.",
              "Fusce in erat id diam porttitor pellentesque et non tortor."
            ]
          }
        })}
        {...actionsData}
      />
    </div>
  );
};

export const Disable = () => (
  <Pricing
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
  <Pricing
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
  <Pricing
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
