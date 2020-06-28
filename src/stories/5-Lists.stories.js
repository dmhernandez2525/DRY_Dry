import React from "react";
import { storiesOf } from "@storybook/react";

import {
  Divider,
  SingleLineList,
  ThreeLineList,
  TwoLineList
} from "../stories";

// export default {
//   title: "Lists"
//   // component: Lists
// };

const Divid = Divider.Default;
const SingleLine = SingleLineList.Default;
const ThreeLine = ThreeLineList.Default;
const TwoLineL = TwoLineList.Default;

export { Divid, SingleLine, ThreeLine, TwoLineL };

storiesOf("Components/Lists/Divid", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <Divid />);
storiesOf("Components/Lists/SingleLine", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <SingleLine />);
storiesOf("Components/Lists/ThreeLine", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <ThreeLine />);
storiesOf("Components/Lists/TwoLineL", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <TwoLineL />);
