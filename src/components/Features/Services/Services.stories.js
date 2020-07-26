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

import Services from "./Services";
import ServicesPropTable from "./ServicesPropTable.md";
import README from "./README.md";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <Services
      id={text("id", "")}
      className={text("className", "")}
      data={array("data", [
        {
          image: "https://comfort-order-dev.s3.amazonaws.com/logo.png",
          title: "Web Design​",
          about:
            "Lorem ipsum dolor sit orot amet, cons ctetur atrd piing elit.​",
          link: "google.com",
          linkText: "Learn More"
        },
        {
          image: "https://comfort-order-dev.s3.amazonaws.com/logo.png",
          title: "Strategy",
          about:
            "Lorem ipsum dolor sit orot amet, cons ctetur atrd piing elit.​",
          link: "google.com",
          linkText: "Learn More"
        },
        {
          image: "https://comfort-order-dev.s3.amazonaws.com/logo.png",
          title: "Software Development",
          about:
            "Lorem ipsum dolor sit orot amet, cons ctetur atrd piing elit.​",
          link: "google.com",
          linkText: "Learn More"
        },
        {
          image: "https://comfort-order-dev.s3.amazonaws.com/logo.png",
          title: "SEO",
          about:
            "Lorem ipsum dolor sit orot amet, cons ctetur atrd piing elit.​",
          link: "google.com",
          linkText: "Learn More"
        }
      ])}
    />
  );
};

storiesOf("Docs/Sticker Sheet", module).add("Change", () => <Default />);

storiesOf("Features/Services", module)
  .addParameters({
    zeplinLink: "",
    readme: {
      codeTheme: "atom-dark",
      sidebar: [README, ServicesPropTable],
      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />);
