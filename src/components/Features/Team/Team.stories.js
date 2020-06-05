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

import Team from "./Team";

export default {
  component: Team,
  title: "Team",
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
    <Team
      // id={text("id", "")}
      // name={text("name", "")}
      // userTip={text("userTip", "")}
      // disable={boolean("disable", false)}
      // className={text("className", "")}
      // errorMes={text("errorMes", "")}
      // styles={object("styles", {})}
      // passProps={object("passProps", {})}
      data={object("data", {
        member1: {
          pic:
            "https://comfort-order-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-03+at+8.32.50+PM.png",
          name: "Tom",
          about:
            "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
          socialLinks: {
            facebook: {
              url: "https://www.facebook.com"
            },
            instagram: {
              url: "https://www.instagram.com"
            },
            linkedin: {
              url: "https://www.linkedin.com"
            }
          }
        },
        member2: {
          pic:
            "https://comfort-order-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-03+at+8.32.50+PM.png",
          name: "Bill",
          about:
            "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
          socialLinks: {
            facebook: {
              url: "https://www.facebook.com"
            },
            instagram: {
              url: "https://www.instagram.com"
            },
            linkedin: {
              url: "https://www.linkedin.com"
            }
          }
        },
        member3: {
          pic:
            "https://comfort-order-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-03+at+8.32.50+PM.png",
          name: "Margret",
          about:
            "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
          socialLinks: {
            facebook: {
              url: "https://www.facebook.com"
            },
            instagram: {
              url: "https://www.instagram.com"
            },
            linkedin: {
              url: "https://www.linkedin.com"
            }
          }
        }
      })}
      {...actionsData}
    />
  );
};

export const Disable = () => (
  <Team
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
  <Team
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
  <Team
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
