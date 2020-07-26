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
// export default {
//   title: "Storybook Knobs",
//   excludeStories: /.*Data$/

//   // decorators: [withKnobs]
// };

import Card from "./Card";
import Input from "../../FormHelpers/Input";
import CardPropTable from "./CardPropTable.md";
import README from "./README.md";

export const Default = () => {
  return (
    <Card
      id={text("id", "")}
      active={boolean("active", false)}
      className={text("className", "")}
    ></Card>
  );
};
export const WithChildren = () => {
  return (
    <Card
      id={text("id", "")}
      active={boolean("active", false)}
      className={text("className", "")}
    >
      <Input />
      <Input />
    </Card>
  );
};

storiesOf("Docs/Sticker Sheet", module).add("Card", () => <Default />);

storiesOf("Components/Base/Card", module)
  .addDecorator(withKnobs)
  .addParameters({
    zeplinLink:
      "https://app.zeplin.io/project/5ea6d579b0189824e6da8f37/screen/5eaf6154c0bf31b0c3600b2e",
    readme: {
      codeTheme: "atom-dark",
      sidebar: [README, CardPropTable]
    }
  })
  .add("Default", () => <Default />)
  .add("WithChildren", () => <WithChildren />);
