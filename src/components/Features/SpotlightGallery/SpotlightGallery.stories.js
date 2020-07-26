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

import SpotlightGallery from "./SpotlightGallery";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <SpotlightGallery
      id={text("id", "")}
      name={text("name", "")}
      userTip={text("userTip", "")}
      disable={boolean("disable", false)}
      className={text("className", "")}
      errorMes={text("errorMes", "")}
      styles={object("styles", {})}
      passProps={object("passProps", {})}
      data={object("data", {
        img1: {
          picUrl:
            "https://comfort-order-dev.s3.us-east-2.amazonaws.com/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg",
          comment:
            "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
        },
        img2: {
          picUrl:
            "https://comfort-order-dev.s3.us-east-2.amazonaws.com/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg",
          comment:
            "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
        },
        img3: {
          picUrl:
            "https://comfort-order-dev.s3.us-east-2.amazonaws.com/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg",
          comment:
            "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
        }
      })}
      {...actionsData}
    />
  );
};
storiesOf("Docs/Sticker Sheet", module).add("Change", () => <Default />);

storiesOf("Features/SpotlightGallery", module)
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
