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

import Restaurant from "../Restaurant";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <Restaurant
      features={{
        feature1: {
          About: [
            {
              title: "sertgserg",
              text: "gsergser",
              pic: "",
              description: "",
              selectedFile: null
            }
          ]
        }
      }}
      template="Restaurant"
      businessData={{
        template: "Restaurant",
        name: "Demo Site name",
        url: "Demo Site url",
        features: [
          {
            data: [
              '{"title":"sertgserg","text":"gsergser","pic":"","description":"","selectedFile":null}'
            ],
            name: "About",
            __typename: "FeatureType"
          }
        ],
        phoneNumber: "Demo Site phoneNumber",
        address: "Demo Site address",
        slogan: "Demo Site slogan",
        __typename: "BusinessType"
      }}
    />
  );
};

storiesOf("Templates/Restaurant", module)
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
