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

import NonProfit from "./NonProfit";

export default {
  component: NonProfit,
  title: "NonProfit",
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
    <NonProfit
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
      template="NonProfit"
      businessData={{
        template: "NonProfit",
        name: "Demo Non Profit Name",
        url: "Demo Non Profit url",
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
