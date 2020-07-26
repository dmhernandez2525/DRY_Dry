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

import Icons from "../../Icons/Icon/Icons";

import Pricing from "./Pricing";

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
        data={object("data", {
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
storiesOf("Docs/Sticker Sheet", module).add("Change", () => <Default />);

storiesOf("Features/Pricing", module)
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
