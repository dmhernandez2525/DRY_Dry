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

import Restaurant from "../Restaurant";

export default {
  component: Restaurant,
  title: "Restaurant",
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
      // id={text("id", "")}
      // name={text("name", "")}
      // width={text("width", "50")}
      // height={text("height", "50")}
      // viewBox={text("viewBox", "0 0 100 100")}
      // icon={text("icon", "")}
      // userTip={text("userTip", "")}
      // disable={boolean("disable", false)}
      // className={text("className", "")}
      // errorMes={text("errorMes", "")}
      // styles={object("styles", {})}
      // passProps={object("passProps", {})}
      // {...actionsData}
    />
  );
};
