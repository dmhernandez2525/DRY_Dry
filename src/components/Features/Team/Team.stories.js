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

import Team from "./Team";
import TeamPropTable from "./TeamPropTable.md";
import README from "./README.md";

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

storiesOf("Docs/Sticker Sheet", module).add("Change", () => <Default />);

storiesOf("Features/Team", module)
  .addParameters({
    zeplinLink: "",
    readme: {
      codeTheme: "atom-dark",
      sidebar: [README, TeamPropTable],
      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />);
