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

import ImageCarousel from "./ImageCarousel";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <ImageCarousel
      id={text("id", "")}
      name={text("name", "")}
      userTip={text("userTip", "")}
      disable={boolean("disable", false)}
      className={text("className", "")}
      errorMes={text("errorMes", "")}
      styles={object("styles", {})}
      passProps={object("passProps", {})}
      data={object("data", {
        slide1: {
          picUrl:
            "https://comfort-order-dev.s3.us-east-2.amazonaws.com/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg",
          title: "Hey",
          detail:
            "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
        },
        slide2: {
          picUrl:
            "https://comfort-order-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-03+at+8.32.50+PM.png",
          title: "Hey",
          detail:
            "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
        },
        slide3: {
          picUrl:
            "https://image.shutterstock.com/z/stock-photo-a-deer-in-the-colors-of-a-foggy-morning-1508990603.jpg",
          title: "Hey",
          detail:
            "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
        }
      })}
      {...actionsData}
    />
  );
};

storiesOf("Docs/Sticker Sheet", module).add("Change", () => <Default />);

storiesOf("Features/ImageCarousel", module)
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
