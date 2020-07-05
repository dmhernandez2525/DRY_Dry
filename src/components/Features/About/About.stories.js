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

import About from "./About";
import README from "./README.md";
import AboutPropTable from "./AboutPropTable.md";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <About
      id={text("id", "")}
      title={text(
        "title",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare enim risus, id fringilla tortor elementum tristique. Etiam nec augue et purus aliquet euismod id eget massa. Sed sollicitudin dictum"
      )}
      text={text(
        "text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare enim risus, id fringilla tortor elementum tristique. Etiam nec augue et purus aliquet euismod id eget massa. Sed sollicitudin dictum massa. Ut nec lorem sed tortor cursus ornare vel vitae augue. Suspendisse varius nisl ac mi ornare, et luctus metus elementum. Donec non congue lectus, vel rutrum mi. Suspendisse potenti. Aenean accumsan vulputate dui, id pretium mi blandit eu. Sed nec libero at eros congue semper."
      )}
      pic={text(
        "pic",
        "https://comfort-order-dev.s3.us-east-2.amazonaws.com/photo-of-woman-wearing-turtleneck-top-2777898.jpg"
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

storiesOf("Features/About", module)
  .addParameters({
    zeplinLink: "",
    readme: {
      codeTheme: "atom-dark",
      sidebar: [README, AboutPropTable],
      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />);

storiesOf("Docs/Sticker Sheet", module).add("Coupon", () => <Default />);
